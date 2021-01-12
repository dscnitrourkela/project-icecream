import React, { useEffect, useState } from 'react';

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
  uploadImage: any;
  crop: Crop;
  zoom: number;
  aspect: number;
  setCrop: (param: Crop) => void;
  setZoom: (param: number) => void;
  setCroppedAreaPixels: (param: any) => void;
  setFrame: (param: any) => void;
  setTextBoxDimenstions: (param: any) => void;
  onPreviousClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onNextClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  frame: string;
  frameData: FrameData;
  primaryText: string;
  secondaryText: string;
  position: string;
  greyscale: boolean;
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
    primaryText,
    secondaryText,
    position,
    setCroppedAreaPixels,
    setTextBoxDimenstions,
    greyscale,
  } = props;

  // Hooks + States
  const windowSize = useWindow();
  const classes = useStyles();

  useEffect(() => {
    const textBox = document.querySelector('#custom-text-box');
    if (textBox) {
      setTextBoxDimenstions({
        // @ts-ignore
        width: textBox?.offsetWidth,
        // @ts-ignore
        height: textBox?.offsetHeight,
      });
    }
  }, [primaryText, secondaryText, setTextBoxDimenstions]);

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

  // ================== Constants ==================
  const vertical = position.split('-')[0];
  const horizontal = position.split('-')[1];
  const cropperDivDimensions =
    windowSize.width <= 1230 ? mobileDimensions : frameData.renderDimensions;
  const backgroundColor = `${frameData.backgroundColor.type}-gradient(to right, ${frameData.backgroundColor.color1} , ${frameData.backgroundColor.color2})`;

  // ================== Styles ==================
  const cropperDiv = {
    backgroundImage: `url(${frame})`,
    width: cropperDivDimensions?.width,
    height: cropperDivDimensions?.height,
  };

  const textBox = {
    // @ts-ignore
    [vertical]: frameData.renderDimensions[vertical],
    // @ts-ignore
    [horizontal]: frameData.renderDimensions[horizontal],
    // backgroundImage: backgroundColor,
  };
  const cropperContainerStyle =
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
        };

  // ================== Render ==================
  return (
    <Card className={classes.root} style={{ backgroundImage: backgroundColor }}>
      <div className={classes.frameContainer}>
        <i
          style={{ color: '#fff', marginRight: 40 }}
          onClick={onPreviousClick}
          className={`fas fa-chevron-left fa-${
            windowSize.width < 600 ? '1' : '3'
          }x`}
        />

        <div
          id='entire-frame-div'
          className={classes.cropperDiv}
          style={cropperDiv}
        >
          {frameData.showTextBox && (
            <div
              id='custom-text-box'
              className={classes.textBox}
              style={textBox}
            >
              <h2 id='custom-text-box-h2' className={classes.primaryText}>
                {primaryText}
              </h2>
              <h3 id='custom-text-box-h3' className={classes.secondaryText}>
                {secondaryText}
              </h3>
            </div>
          )}

          <img src={frame} alt='frame' className={classes.frameImage} />

          <Cropper
            image={uploadImage}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            minZoom={1}
            restrictPosition={false}
            cropSize={cropperContainerStyle}
            onCropChange={(crop: { x: number; y: number }) => setCrop(crop)}
            onZoomChange={(zoom: number) => setZoom(zoom)}
            onCropComplete={(_, croppedAreaPixels) =>
              setCroppedAreaPixels(croppedAreaPixels)
            }
            classes={{
              containerClassName: `${classes.cropperContainer}`,
              mediaClassName: `${classes.cropperMedia}`,
              cropAreaClassName: `${classes.cropArea}`,
            }}
            style={{
              containerStyle: cropperContainerStyle,
              // @ts-ignore
              mediaStyle: greyscale
                ? {
                    WebkitFilter: 'grayscale(100%)',
                    filter: 'grayscale(100%)',
                  }
                : null,
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
    minHeight: window.innerHeight,
    height: '100%',
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
    minHeight: '100%',
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
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  textBox: {
    // minWidth: 200,
    maxWidth: 400,
    height: 80,
    padding: '0px 10px',
    margin: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      width: '45%',
      height: 'auto',
    },
  },
  primaryText: {
    margin: 0,
    padding: 0,
    fontFamily: "'Bungee', 'Arial'",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  secondaryText: {
    margin: 0,
    padding: 0,
    fontFamily: "'Poppins', 'Arial'",
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
}));
