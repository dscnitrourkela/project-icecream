import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
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
    w-44
    `}
`;

const Head = () => (
  <a href={home.logo.web} target='_blank' rel='noopener noreferrer'>
    <Heading style={{ marginBottom: '18px' }}>
      <Logo src={home.logo.src} alt={home.logo.alt} />
    </Heading>
  </a>
);

export default Head;
