import React, { useState } from 'react';

// Libraries
import {
  Button,
  Box,
  makeStyles,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import ImageUploader from 'react-images-upload';

// Components
import FrameCarousel from './carousel/Carousel';

// Assets
import { data } from '../utils/placeholder';

const App: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect] = useState<number>(1 / 1);

  const classes = useStyles();

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
        <FrameCarousel
          uploadImage={uploadImage}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          setCrop={setCrop}
          setZoom={setZoom}
          data={data}
        />
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
