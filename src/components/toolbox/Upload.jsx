import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Container from '../shared/Container';
import ImageUpload from './ImageUpload';

const Section1 = styled.div`
  ${tw`
  md:grid grid-cols-3 auto-cols-max
  `}
`;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-left
 `}
  font-size: 1.5rem;
`;

const Description = styled.div`
  ${tw`
  text-sm
  text-frame-gray
  font-normal
  col-span-2
  pl-4
  text-left
  `}
`;

export default function Upload({ uploadedImage, setUploadedImage }) {
  return (
    <Container style={{ marginTop: '25px' }}>
      <Heading1>Upload Image</Heading1>
      <Section1>
        <Description>
          Click on the upload icon to upload image. You can repeat this step to choose another
          image.
        </Description>
        <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
      </Section1>
    </Container>
  );
}
