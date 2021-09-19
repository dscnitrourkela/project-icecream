import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Button from '../components/shared/Button';
import Head from '../components/shared/Head';

// Assets
import home from '../../config/home';

const Container = styled.div`
  ${tw`
    bg-white
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    overflow-x-hidden
    overflow-y-hidden
    `}
  grid-template-rows: repeat(14, minmax(0, 1fr));
  min-width: 100vw;
  min-height: 100vh;
`;
const Heading = styled.div`
  ${tw`
    row-span-2
    text-6xl
    flex
    justify-center
    items-center
    gap-4
    `}
`;
const FrameImg = styled.img`
  ${tw`
    row-span-6
    h-full
    w-full
    `}
`;
const SubHeading = styled.p`
  ${tw`
    row-span-1
    text-lg
    `}
`;
const Description = styled.p`
  ${tw`
    row-span-2
    text-center
    text-sm
    text-frame-gray
    `}
`;
const Yellow = styled.span`
  ${tw`
    text-frame-yellow
    `}
`;
const Blue = styled.span`
  ${tw`
    text-frame-blue
    `}
`;
const DarkGreen = styled.span`
  ${tw`
    text-frame-dark-green
    `}
`;
const Green = styled.span`
  ${tw`
    text-frame-green
    `}
`;
const Red = styled.span`
  ${tw`
    text-frame-red
    `}
`;
const SlimText = styled.span`
  ${tw`
    font-light
    `}
`;

const Home = () => (
  <Container>
    <Head />
    <FrameImg src={home.frame.src} alt={home.frame.alt} />
    <SubHeading>{home.subheading}</SubHeading>

    <Heading>
      <h1>
        <Yellow>F</Yellow>
        <Blue>R</Blue>
        <DarkGreen>A</DarkGreen>
        <Red>M</Red>
        <Green>E</Green>
      </h1>
      <SlimText>BOI</SlimText>
    </Heading>
    <Description>{home.description}</Description>
    <Button>{home.button}</Button>
  </Container>
);

export default Home;
