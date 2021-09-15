import React, { useState, useRef } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel from '../carousel/Carousel';
import Head from '../shared/Head';
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/TextBox';
import Download from '../toolbox/Download';
import frameData from '../../../config/frameData';

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

export default function App() {
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
      <div className='App' style={{ display: 'grid', margin: '20px' }}>
        <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
          <Layer>
            <Image
              image={frameImg}
              width={350}
              height={350}
              style={{ zIndex: '100', position: 'absolute' }}
            />
            <Image image={image} width={281} height={280} x={34} y={35} draggable='true' />
            <Text
              text={userName}
              x={45}
              y={45}
              fontSize={22}
              draggable='true'
              width={200}
              fill='black'
            />

            <Text
              text={guildName}
              x={4}
              y={68}
              fontSize={22}
              draggable='true'
              width={200}
              wrap='char'
              align='center'
            />
          </Layer>
        </Stage>
        <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
        <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
        <CustomText
          username={userName}
          guildname={guildName}
          setYourName={setUserName}
          setGuildname={setGuildName}
        />

        <Download stageRef={stageRef} />
      </div>
    </Container>
  );
}
