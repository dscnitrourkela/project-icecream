import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Container from '../shared/Container';
import ImageUpload from './ImageUpload';

const Section1 = styled.div`
  ${tw`
  md:grid grid-cols-3 auto-cols-max
  `}
`;

const Heading1 = styled.h1`
  ${tw`
  text-2xl
  font-normal
  pl-2
 `}
`;

const Description = styled.div`
  ${tw`
  text-lg
  text-frame-gray
  font-normal
  col-span-2
  p-2
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    pl-6
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    p-2
    rounded-full
    h-16 w-16 
    justify-center
    /* bg-background-darkest */
  `}
`;

export default function Upload({
  name,
  setName,
  guildName,
  setGuildName,
  uploadedImage,
  setUploadedImage,
}) {
  return (
    <Container>
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
