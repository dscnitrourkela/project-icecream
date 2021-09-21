import React from 'react';

// Libraries
import tw from 'twin.macro';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  ${tw`
    m-auto
    p-5
    `}
`;
const ButtonDark = styled.button`
  ${tw`
   uppercase
    rounded-full
    bg-black
    px-16
    py-6
    text-color-bright
    border-none
    outline-none
    hover:bg-gray-800
    `}
`;

const Button = ({ children }) => (
  <ButtonContainer>
    <ButtonDark>{children}</ButtonDark>
  </ButtonContainer>
);

export default Button;
