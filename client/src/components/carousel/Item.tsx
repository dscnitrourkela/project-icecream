import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import Cropper from 'react-easy-crop';

// Components
import { Card } from '@material-ui/core';

// Types
import { Crop, Gradient } from '../../types';

interface Props {
  uploadImage: null | File;
  crop: Crop;
  zoom: number;
  aspect: number;
  setCrop: (param: Crop) => void;
  setZoom: (param: number) => void;
  onPreviousClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onNextClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgcolor: Gradient;
  frame: string;
}

const Item: React.FC<Props> = (props) => {
  const {
    uploadImage,
    crop,
    zoom,
    aspect,
    setCrop,
    setZoom,
    frame,
    bgcolor,
    onNextClick,
    onPreviousClick,
  } = props;

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: `${bgcolor.type}-gradient(to right, ${bgcolor.color1} , ${bgcolor.color2})`,
      }}
    >
      <i
        style={{ color: '#fff' }}
        onClick={onPreviousClick}
        className='fas fa-chevron-left'
      />
      <div
        className={classes.cropperDiv}
        style={{ backgroundImage: `url(${frame})` }}
      >
        <img
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
        />
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
      <i
        style={{ color: '#fff' }}
        onClick={onNextClick}
        className='fas fa-chevron-right'
      />
    </Card>
  );
};

export default Item;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
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
