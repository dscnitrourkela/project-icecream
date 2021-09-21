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

const Container3 = styled.h1`
  ${tw`
   w-7/12
   m-auto
   sm:w-10/12
`}
`;

const CarouselC = styled.h1`
  ${tw`
    flex
    w-94
    whitespace-nowrap
    flex-nowrap
    overflow-auto
    justify-center
    items-center
    m-auto
    overflow-y-hidden
`}
`;

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
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prevCheck) => !prevCheck);

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
          checked={checked}
        />
      )}
      <CarouselC>
        <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
      </CarouselC>
      <Container3>
        <Inputs
          handleChange={handleChange}
          checked={checked}
          setChecked={setChecked}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          userName={userName}
          setUsername={setUserName}
          guildName={guildName}
          setGuildname={setGuildName}
        />
      </Container3>
      <Download stageRef={stageRef} />
    </Container>
  );
};

export default Frame;
