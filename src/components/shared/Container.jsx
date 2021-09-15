import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${tw`
    font-roboto
    pt-2
    grid
    grid-rows-1
    grid-cols-1
    bg-background-darker
    border-solid border-2 border-gray-50
    mb-4
    rounded-xl
    mt-5
  `}
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
