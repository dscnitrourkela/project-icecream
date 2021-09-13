import React, { useState, useRef } from 'react';
import { Stage, Layer, Image, Text, Label, Rect } from 'react-konva';
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel from '../carousel/Carousel';
// import Inputs from '../toolbox/Input';
import Head from '../shared/Head';
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/TextBox';
import Download from '../toolbox/Download';

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
    `}/* grid-template-rows: repeat(14, minmax(0, 1fr));
  min-width: 100vw;
  min-height: 100vh; */
`;

const FRAMES = {
  // eslint-disable-next-line max-len
  ONE: 'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/siap9qgjxblbkg1ubmsq.png',
  // eslint-disable-next-line max-len
  TWO: 'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/fvbpjkljamqjaq7kzy7q.png',
  THREE:
    // eslint-disable-next-line max-len
    'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/p15pic06ielx741wdmh1.png',
  // eslint-disable-next-line max-len
  FOUR: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1610220397/icecream_frames/hd9zlgcsw9zjppn0lw9x.png',
};

export default function App() {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [username, setYourName] = useState('Your Name');
  const [guildname, setGuildname] = useState('Guild Name');
  const stageRef = useRef(null);

  const [image] = useImage(selectedFrame);
  const [image2] = useImage(uploadedImage);

  return (
    <Container>
      <Head />
      <div className='App' style={{ display: 'grid', margin: '20px' }}>
        <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
          <Layer>
            <Image
              image={image}
              width={350}
              height={350}
              style={{ zIndex: '100', position: 'absolute' }}
            />
            <Image image={image2} width={281} height={280} x={34} y={35} draggable='true' />
            <Text
              text={username}
              x={45}
              y={45}
              fontSize={22}
              draggable='true'
              width={200}
              fill='black'
            />

            <Text
              text={guildname}
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
        {/* <Inputs uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} /> */}
        <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
        <CustomText
          username={username}
          guildname={guildname}
          setYourName={setYourName}
          setGuildname={setGuildname}
        />

        <Download stageRef={stageRef} />
      </div>
    </Container>
  );
}
