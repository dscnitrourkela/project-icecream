import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import NukaCarousel from 'nuka-carousel';

import Item from './Item';

declare type Crop = {
  x: number;
  y: number;
};

declare type Data = {
  resolution: number;
  width: number;
  shape: string;
  frame: string;
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
    <Container className={classes.root}>
      <NukaCarousel wrapAround={true}>
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
          />
        ))}
      </NukaCarousel>
    </Container>
  );
};

export default FrameCarousel;

const useStyles = makeStyles(() => ({
  sliderdiv: {
    width: '60%',
    height: 800,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
