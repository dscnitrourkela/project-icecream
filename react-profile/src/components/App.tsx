import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { makeStyles } from '@material-ui/core';
import Cropper from 'react-easy-crop';

// import FrameCarousel from './carousel/Carousel'

const App: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect] = useState<number>(1 / 1);

  const classes = useStyles();

  return (
    <div>
      <h1>Hello Typescript!</h1>
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Choose images'
        onChange={(picture: File[]) => {
          setUploadImage(picture[0]);
        }}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={5242880 * 2}
        singleImage={true}
      />
      {uploadImage && (
        <div className={classes.cropperDiv}>
          <Cropper
            image={uploadImage ? URL.createObjectURL(uploadImage) : ''}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            minZoom={1}
            restrictPosition={false}
            cropSize={{ width: 512, height: 512 }}
            onCropChange={(crop: { x: number; y: number }) => setCrop(crop)}
            onCropComplete={() => console.log(crop)}
            onZoomChange={(zoom: number) => setZoom(zoom)}
            classes={{
              containerClassName: `${classes.cropperContainer}`,
              mediaClassName: `${classes.cropperMedia}`,
              cropAreaClassName: `${classes.cropArea}`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: 600,
  },
  cropperDiv: {
    height: 576 + 64,
    width: 576 + 64,
    overflow: 'hidden',
    backgroundImage: 'url(/frame.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  cropperContainer: {
    width: 512,
    height: 512,
    overflow: 'hidden',
    position: 'absolute',
    top: '64px !important',
    left: '64px !important',
  },
  cropperMedia: {
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  cropArea: {
    boxShadow: '0 0 0 0 !important',
  },
}));
