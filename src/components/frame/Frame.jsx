import React, { useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel from '../carousel/Carousel';
import Inputs from '../toolbox/Input';

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
  grid-template-rows: repeat(14, minmax(0, 1fr));
  min-width: 100vw;
  min-height: 100vh;
`;

const FRAMES = {
  // eslint-disable-next-line max-len
  ONE: 'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/siap9qgjxblbkg1ubmsq.png',
  // eslint-disable-next-line max-len
  TWO: 'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/fvbpjkljamqjaq7kzy7q.png',
  THREE:
    // eslint-disable-next-line max-len
    'https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/p15pic06ielx741wdmh1.png',
};

export default function App() {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.THREE);
  const [uploadedImage, setUploadedImage] = useState();

  const [image] = useImage(selectedFrame);
  const [image2] = useImage(uploadedImage);

  return (
    <Container>
      <div className='App' style={{ display: 'grid' }}>
        <Stage width={400} height={400} x={0} style={{ margin: 'auto' }}>
          <Layer>
            <Image
              image={image}
              width={400}
              height={400}
              style={{ zIndex: '100', position: 'absolute' }}
            />
            <Image image={image2} width={322} height={321} x={39} y={39} draggable='true' />
          </Layer>
        </Stage>
        <Carousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
        <Inputs uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
      </div>
    </Container>
  );
}
