import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ButtonContainer = styled.span`
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
    bg-background-darkest
  `}
`;

export default ({ uploadedImage, setUploadedImage }) => (
  <div>
    <ButtonContainer>
      {/* <FontAwesomeIcon icon={["fas", "upload"]} /> */}

      <Button>
        <label htmlFor='contained-button-file'>
          <FontAwesomeIcon icon={faUpload} size='2x' style={{ color: '#fff' }} />
        </label>
      </Button>
    </ButtonContainer>

    <input
      type='file'
      accept='image/*'
      style={{ display: 'none' }}
      id='contained-button-file'
      onChange={(e) => setUploadedImage(URL.createObjectURL(e.target.files[0]))}
    />

    {/* <label htmlFor="contained-button-file">
        <button variant="contained" color="primary" component="span">
          Upload
        </button>
      </label> */}
  </div>
);
