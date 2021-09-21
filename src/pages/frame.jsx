import React, { useState, useRef } from 'react';

// Libraries
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Carousel from '../components/frameControllers/FrameCarousel';
import Head from '../components/shared/Head';
import Inputs from '../components/frameControllers/DetailsInput';
import Download from '../components/toolbox/Download';
import Canvas from '../components/canvas/Stage';

// Assets
import frameData from '../../config/frameData';

const Container = styled.div`
  ${tw`
    bg-white
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    overflow-x-hidden
    overflow-y-hidden
    `}
`;

const FRAMES = {
  ONE: frameData.frames.ONE,
  TWO: frameData.frames.ONE,
  THREE: frameData.frames.TWO,
  FOUR: frameData.frames.THREE,
  FIVE: frameData.frames.FOUR,
  SIX: frameData.frames.FIVE,
};

const Frame = () => {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [userName, setUserName] = useState('Your Name');
  const [guildName, setGuildName] = useState('Guild Name');

  const stageRef = useRef(null);
  const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [image] = useImage(uploadedImage, 'Anonymous');

  return (
    <Container>
      <Head />
      {typeof window !== 'undefined' && (
        <Canvas
          stageRef={stageRef}
          userName={userName}
          guildName={guildName}
          frameImg={frameImg}
          image={image}
        />
      )}
      <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
      <Inputs
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        userName={userName}
        setUsername={setUserName}
        guildName={guildName}
        setGuildname={setGuildName}
      />
      <Download stageRef={stageRef} />
    </Container>
  );
};

export default Frame;
