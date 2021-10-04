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
import CanvasStage from '../components/canvas/Stage';

// Assets
import frameData from '../../config/frameData';

const Container3 = styled.h1`
  ${tw`
   w-94
   pt-2
   m-auto
   sm:w-full
`}
`;

const CarouselC = styled.h1`
  ${tw`
    w-94
    sm:w-full
    overflow-y-hidden
`}
  margin: 0px, 0px;
  padding: 1px;
  overflow-x: auto;
  white-space: nowrap;
`;

const Container = styled.div`
  ${tw`
    bg-color-secondary
    h-full
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    /* overflow-x-hidden */
    overflow-y-hidden
    `}
`;

const FRAMES = {
  ONE: frameData.frames.ONE,
  TWO: frameData.frames.TWO,
  THREE: frameData.frames.THREE,
  FOUR: frameData.frames.FOUR,
  FIVE: frameData.frames.FIVE,
  SIX: frameData.frames.FIVE,
};

const Frame = () => {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [userName, setUserName] = useState('Your Name');
  const [guildName, setGuildName] = useState('Guild Name');
  const [checked, setchecked] = useState(false);
  const [checkedGuild, setcheckedGuild] = useState(false);

  const handleChange = () => setchecked((prevCheck) => !prevCheck);
  const handleChangeGuild = () => setcheckedGuild((prevCheck) => !prevCheck);

  const stageRef = useRef(null);
  const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [image] = useImage(uploadedImage, 'Anonymous');

  return (
    <Container>
      <Head />
      {typeof window !== 'undefined' && (
        <CanvasStage
          stageRef={stageRef}
          userName={userName}
          guildName={guildName}
          frameImg={frameImg}
          image={image}
          checked={checked}
          checkedGuild={checkedGuild}
          height={height}
          width={width}
        />
      )}
      <CarouselC>
        <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
      </CarouselC>
      <Container3>
        <Inputs
          handleChange={handleChange}
          handleChangeGuild={handleChangeGuild}
          checked={checked}
          checkedGuild={checkedGuild}
          setchecked={setchecked}
          setheckedGuild={setcheckedGuild}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          setHeight={setHeight}
          setWidth={setWidth}
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
