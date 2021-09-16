import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel from '../components/frameControllers/carousel';
import Head from '../components/shared/Head';
import Inputs from '../components/frameControllers/input';
import Download from '../components/toolbox/Download';
import Canvas  from '../components/canvas/stage';

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

function Frame({ 
  stageRef, 
  userName, 
  setUserName, 
  guildName, 
  setGuildName,
  frameImg,
  image,
  setSelectedFrame,
  uploadedImage,
  setUploadedImage,
  FRAMES }) {

   return(
    <Container>
      <Head />
      <div className='App' style={{ display: 'grid', margin: '20px' }}>
        <Canvas
         stageRef={stageRef}
         userName={userName}
         guildName={guildName}
         frameImg={frameImg}
         image={image}
        />       
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
      </div>
    </Container>
   );
};

export default Frame;
