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
    bg-color-bright
    uppercase
    rounded-full 
    px-16
    py-6
    text-black
    font-medium
    border-none
    outline-none
    hover:bg-frame-gray
    `}
`;

const Button = ({ children }) => (
  <ButtonContainer>
    <ButtonDark>{children}</ButtonDark>
  </ButtonContainer>
);

export default Button;
