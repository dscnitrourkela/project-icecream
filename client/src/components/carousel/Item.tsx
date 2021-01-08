import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import Cropper from 'react-easy-crop';

// Components
import { Card } from '@material-ui/core';

// Types
import { Crop, FrameData } from '../../utils/types';

// Helpers + Hooks
import { determineRenderDimensions } from '../../utils/helpers';
import useWindow from '../../hooks/useWindow';

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
  frame: string;
  frameData: FrameData;
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
    onNextClick,
    onPreviousClick,
    frameData,
  } = props;
  const windowSize = useWindow();
  const classes = useStyles();

  const { width, height, top, right, bottom, left } = frameData.dimensions;
  const mobileDimensions = determineRenderDimensions(
    width,
    height,
    top,
    right,
    bottom,
    left,
    windowSize.width < 600 ? windowSize.width - 200 : windowSize.width / 2
  );
  const onCrop = () => {};

  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: `${frameData.backgroundColor.type}-gradient(to right, ${frameData.backgroundColor.color1} , ${frameData.backgroundColor.color2})`,
      }}
    >
      <div className={classes.frameContainer}>
        <i
          style={{ color: '#fff', marginRight: 40 }}
          onClick={onPreviousClick}
          className={`fas fa-chevron-left fa-${
            windowSize.width < 600 ? '1' : '3'
          }x`}
        />
        <div
          className={classes.cropperDiv}
          style={
            windowSize.width <= 1230
              ? {
                  backgroundImage: `url(${frame})`,
                  width: mobileDimensions.width,
                  height: mobileDimensions.height,
                }
              : {
                  backgroundImage: `url(${frame})`,
                  width: frameData.renderDimensions.width,
                  height: frameData.renderDimensions.height,
                }
          }
        >
          <img src={frame} alt='frame' className={classes.frameImage} />
          <Cropper
            image={uploadImage ? URL.createObjectURL(uploadImage) : ''}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            minZoom={1}
            restrictPosition={false}
            cropSize={{ width: 512, height: 512 }}
            onCropChange={(crop: { x: number; y: number }) => setCrop(crop)}
            onCropComplete={onCrop}
            onZoomChange={(zoom: number) => setZoom(zoom)}
            classes={{
              containerClassName: `${classes.cropperContainer}`,
              mediaClassName: `${classes.cropperMedia}`,
              cropAreaClassName: `${classes.cropArea}`,
            }}
            style={{
              containerStyle:
                windowSize.width <= 1230
                  ? {
                      width:
                        windowSize.width < 600
                          ? windowSize.width - 200
                          : windowSize.width / 2,
                      height:
                        windowSize.width < 600
                          ? windowSize.width - 200
                          : windowSize.width / 2,
                      top: mobileDimensions.top,
                      left: mobileDimensions.left,
                    }
                  : {
                      width: 512,
                      height: 512,
                      top: frameData.renderDimensions.top,
                      left: frameData.renderDimensions.left,
                    },
            }}
          />
        </div>
        <i
          style={{ color: '#fff', marginLeft: 40 }}
          onClick={onNextClick}
          className={`fas fa-chevron-right fa-${
            windowSize.width < 600 ? 1 : 3
          }x`}
        />
      </div>
    </Card>
  );
};

export default Item;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: window.innerHeight,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: 30,
    },
  },
  cropperDiv: {
    overflow: 'hidden',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  cropperContainer: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 9,
  },
  cropperMedia: {
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  cropArea: {
    boxShadow: '0 0 0 0 !important',
  },
  frameImage: {
    width: '100%',
    height: 'auto',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
  frameContainer: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
