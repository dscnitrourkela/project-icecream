import React from 'react';

// Libraries
import tw from 'twin.macro';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  ${tw`
    row-span-2
    p-5
    `}
`;
const ButtonDark = styled.button`
  ${tw`
    uppercase
    rounded-full
    bg-black
    text-white
    pr-10
    pl-10
    pt-4
    pb-4
    `}
`;

const Button = ({ children }) => (
  <ButtonContainer>
    <ButtonDark>{children}</ButtonDark>
  </ButtonContainer>
);

export default Button;
