import React from 'react';

import { makeStyles } from '@material-ui/core';
import NukaCarousel from 'nuka-carousel';

import Item from './Item';

declare type Crop = {
  x: number;
  y: number;
};

declare type frameBackground = {
  type: string;
  color1: string;
  color2: string;
};

declare type Data = {
  resolution: number;
  width: number;
  shape: string;
  frame: string;
  background: frameBackground;
};
interface Props {
  data: Data[];
  uploadImage: null | File;
  crop: Crop;
  zoom: number;
  aspect: number;
  setCrop: (param: Crop) => void;
  setZoom: (param: number) => void;
}

const FrameCarousel: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { data, uploadImage, crop, zoom, aspect, setCrop, setZoom } = props;

  return (
    <div className={classes.root}>
      <NukaCarousel
        wrapAround={true}
        dragging={false}
        disableEdgeSwiping={true}
        heightMode="max"
        defaultControlsConfig={{
          prevButtonStyle: {position: 'absolute', left: '10%', padding: '1rem'},
          nextButtonStyle: {position: 'absolute', right: '30%'},
          nextButtonText: 'Next Frame',
          prevButtonText: 'Prev Frame',
          pagingDotsStyle: {
            fill: 'yellow'
          }
        }}
      >
        {data.map((frame, index) => (
          <Item
            key={index}
            uploadImage={uploadImage}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            setCrop={setCrop}
            setZoom={setZoom}
            frame={frame.frame}
            bgcolor={data[index].background}
          />
        ))}
      </NukaCarousel>
    </div>
  );
};

export default FrameCarousel;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'green'
  },
}));
