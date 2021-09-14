/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
    bg-background-darkest
    border-none
    outline-none
  `}
`;

export default ({ setUploadedImage }) => (
  <div>
    <ButtonContainer>
      {/* <FontAwesomeIcon icon={["fas", "upload"]} /> */}

      <Button>
        <label htmlFor='contained-button-file'>
          <FontAwesomeIcon icon={faArrowUp} size='2x' style={{ color: '#fff' }} />
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
