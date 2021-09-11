import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import home from '../../../config/home';

const Heading = styled.div`
  ${tw`
    text-center
    text-lg
    flex
    gap-2
    items-center
    `}
`;
const Logo = styled.img`
  ${tw`
    h-10
    w-10
    `}
`;

function Head() {
  return (
    <Heading>
      <Logo src={home.logo.src} alt={home.logo.alt} />
      <p>{home.head}</p>
    </Heading>
  );
}

export default Head;
