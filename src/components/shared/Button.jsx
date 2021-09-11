import React from 'react';
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

function Button({ children }) {
  return (
    <ButtonContainer>
      <ButtonDark>{children}</ButtonDark>
    </ButtonContainer>
  );
}

export default Button;
