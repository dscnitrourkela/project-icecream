import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Container1 = styled.div`
  ${tw`
 mt-3
 py-2
 bg-frame-xgray
 rounded-lg
`}
`;

const Section1 = styled.div`
  ${tw`
    flex
    gap-4
  `}
`;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-left
  mt-2
  text-color-bright
 `}
  font-size: 1.5rem;
`;

const Description = styled.div`
  ${tw`
  w-3/4
  text-sm
  text-frame-gray
  font-normal
  col-span-2
  py-2
  pl-4
  text-left
  mb-2
  leading-4
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    pl-0
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    mb-2
    rounded-full
    h-12 w-12
    justify-center
    bg-color-bright
    border-none
    outline-none
  `}
`;

const Upload = ({ setUploadedImage }) => (
  <Container1>
    <Heading1>Upload Image</Heading1>
    <Section1>
      <Description>
        Click on the upload icon to upload image. You can repeat this step to choose another image.
      </Description>
      <div>
        <ButtonContainer>
          <Button>
            <label htmlFor='contained-button-file'>
              <FontAwesomeIcon icon={faUpload} style={{ color: '#000', fontSize: '23px' }} />
            </label>
          </Button>
        </ButtonContainer>

        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          id='contained-button-file'
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setUploadedImage(URL.createObjectURL(e.target.files[0]));
            }
          }}
        />
      </div>
    </Section1>
  </Container1>
);

export default Upload;
