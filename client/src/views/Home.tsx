import React, { useEffect, useState } from 'react';

// Libraries
import { Box, makeStyles } from '@material-ui/core';
import jimp from 'jimp';
import download from 'downloadjs';
import html2canvas from 'html2canvas';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Components
import FrameCarousel from '../components/carousel/Carousel';
import EditBox from '../components/homepage/EditBox';

// Utils
import getCroppedImage from '../utils/cropImage';
import { determineTextboxDimensions } from '../utils/helpers';

// Assets
import { FrameData } from '../utils/types';

const App: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<string>('');
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect] = useState<number>(1 / 1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [frame, setFrame] = useState<FrameData | null>(null);
  const [greyscale, setGreyscale] = useState<boolean>(false);
  const [textBoxDimensions, setTextBoxDimensions] = useState<any>();

  const [primaryText, setPrimaryText] = useState<string>('Primary Text');
  const [secondaryText, setSecondaryText] = useState<string>('Secondary Text');
  const [position, setPosition] = useState<string>('top-right');

  const [data, setData] = useState<FrameData[] | null>(null);
  const classes = useStyles();

  useEffect(() => {
    firebase
      .firestore()
      .collection('frames')
      .where('approved', '==', true)
      .get()
      .then((query: any) => {
        let frames: any = [];

        query.forEach((frame: any) => {
          frames.push(frame.data());
        });
        setData(frames);
        setFrame(frames[0]);
      });
  }, []);

  // Generate Frame
  const overlayImage = async () => {
    if (frame) {
      console.log('start');
      const {
        dimensions: { width, height, top, bottom, right, left },
      } = frame;

      const cropImage = await getCroppedImage(uploadImage, croppedAreaPixels);

      const image1 = await jimp.read(frame.frame);
      const frameImage = image1.resize(width, height);

      const image2 = await jimp.read(cropImage);
      const profile = image2.resize(
        width - right - left,
        height - top - bottom
      );

      if (greyscale) profile.greyscale();

      // @ts-ignore
      html2canvas(document.querySelector('#custom-text-box')).then(
        async (canvas) => {
          const url = canvas.toDataURL();

          const {
            width: textBoxWidth,
            height: textBoxHeight,
          } = determineTextboxDimensions(
            textBoxDimensions.width,
            textBoxDimensions.height,
            width - right - left,
            height - top - bottom
          );

          const textbox = await jimp.read(url);
          const textBox = textbox.resize(textBoxWidth, textBoxHeight);

          let x, y;
          if (position === 'top-right') {
            y = top;
            x = width - right - textBoxWidth;
          } else if (position === 'top-left') {
            y = top;
            x = left;
          } else if (position === 'bottom-right') {
            y = height - bottom - textBoxHeight;
            x = width - right - textBoxWidth;
          } else if (position === 'bottom-left') {
            y = height - bottom - textBoxHeight;
            x = left;
          }

          frameImage
            .composite(profile, top, left)
            // @ts-ignore
            .composite(textBox, x, y)
            // @ts-ignore
            .getBase64(jimp.AUTO, async (err: any, src: any) => {
              download(src, 'profile-frame.png', 'image/png');
              console.log('end');
            });
        }
      );
    }
  };

  return (
    <div style={{ minHeight: window.innerHeight }}>
      <EditBox
        primaryText={primaryText}
        secondaryText={secondaryText}
        position={position}
        greyscale={greyscale}
        setPrimaryText={setPrimaryText}
        setSecondaryText={setSecondaryText}
        setPosition={setPosition}
        setGreyscale={setGreyscale}
        setUploadImage={setUploadImage}
        overlayImage={overlayImage}
      />

      <Box className={classes.frame}>
        {data !== null ? (
          <FrameCarousel
            uploadImage={uploadImage}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            setCrop={setCrop}
            setZoom={setZoom}
            data={data}
            primaryText={primaryText}
            secondaryText={secondaryText}
            position={position}
            setCroppedAreaPixels={setCroppedAreaPixels}
            setFrame={setFrame}
            setTextBoxDimenstions={setTextBoxDimensions}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </Box>
    </div>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  frame: {
    width: '100%',
    minHeight: window.innerHeight + 50,
    zIndex: 0,
  },
}));
