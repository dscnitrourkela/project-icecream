import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Cropper from 'react-easy-crop';

declare type Crop = {
  x: number;
  y: number;
};

interface Props {
  uploadImage: null | File;
  crop: Crop;
  zoom: number;
  aspect: number;
  frame: string;
  setCrop: (param: Crop) => void;
  setZoom: (param: number) => void;
}

const Item: React.FC<Props> = (props) => {
  const { uploadImage, crop, zoom, aspect, setCrop, setZoom, frame } = props;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div
        className={classes.cropperDiv}
        style={{ backgroundImage: `url(${frame})` }}
      >
        {/* <img
          src={'/frame.png'}
          alt='frame'
          style={{
            width: '100%',
            height: 'auto',
            zIndex: 10,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        /> */}
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
    </Card>
  );
};

export default Item;

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 550,
    height: 550,
    zIndex: 10,
  },
  userImage: {
    width: 600,
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
  },
  cropperDiv: {
    height: 576 + 64,
    width: 576 + 64,
    overflow: 'hidden',
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
    zIndex: 100,
  },
  cropperMedia: {
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  cropArea: {
    boxShadow: '0 0 0 0 !important',
  },
});
