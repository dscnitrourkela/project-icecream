import React, { useEffect, useState } from 'react';

// Libraries
import {
  Button,
  Box,
  makeStyles,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Components
import FrameCarousel from '../components/carousel/Carousel';

// Assets
// import { data } from '../utils/placeholder';
import { FrameData } from '../utils/types';

const App: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect] = useState<number>(1 / 1);

  const [data, setData] = useState<FrameData[] | null>(null);

  const classes = useStyles();

  // let data: FrameData[] | null = null;
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
      });
  }, []);

  return (
    <div>
      <Box className={classes.features}>
        <FormControlLabel control={<Switch />} label='Grayscale' />

        <ImageUploader
          className={classes.upload}
          withIcon={false}
          withLabel={false}
          buttonText='CHOOSE IMAGE'
          imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
          maxFileSize={5242880 * 2}
          singleImage={true}
          fileContainerStyle={{ height: '20px' }}
          buttonClassName={classes.buttonStyles}
          onChange={(picture: File[]) => {
            setUploadImage(picture[0]);
          }}
        />

        <Button variant='contained' color='secondary'>
          Download
        </Button>
      </Box>

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
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </Box>
    </div>
  );
};

export default App;

const useStyles = makeStyles({
  features: {
    position: 'absolute',
    right: '15%',
    top: '40%',
    zIndex: 10,
    backgroundImage: '#334d50',
    background: 'linear-gradient(to right, #FDC830, #F37335)',
    padding: '1rem',
    borderRadius: '5px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  frame: {
    width: '100%',
    height: window.innerHeight,
    zIndex: 0,
    backgroundColor: 'blue',
  },
  upload: {
    width: 'auto',
  },
  buttonStyles: {
    backgroundColor: '#3F51B5',
    width: '100%',
    height: 'fit-content',
    margin: 0,
  },
});
