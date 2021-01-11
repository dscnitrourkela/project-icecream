import React, { useEffect, useState } from 'react';

// Libraries
import { Box, makeStyles } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Components
import FrameCarousel from '../components/carousel/Carousel';
import EditBox from '../components/homepage/EditBox';

// Utils + Assets
import { overlayImage } from '../utils/overlayImage';
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
        overlayImage={() =>
          overlayImage(
            frame,
            uploadImage,
            croppedAreaPixels,
            greyscale,
            textBoxDimensions,
            position
          )
        }
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
