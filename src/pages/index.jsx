import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

// Components
import Button from '../components/shared/Button';
import Head from '../components/shared/Head';

// Assets
import home from '../../config/home';

const Container = styled.div`
  ${tw`

    bg-color-secondary
    grid
    h-full
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    /* overflow-x-hidden */
    overflow-y-hidden
    `}
`;
const Heading = styled.div`
  ${tw`
    text-6xl
    flex
    justify-center
    items-center
    gap-4
    m-4
    `}
`;
const FrameImg = styled.img`
  ${tw`
    /* row-span-6 */
    h-full
    sm:w-full
    `}
`;
const SubHeading = styled.p`
  ${tw`
    /* row-span-1 */
    text-lg
    mt-4
    text-frame-lgray
    `}
`;
const Description = styled.p`
  ${tw`
    row-span-2
    text-center
    text-sm
    text-frame-gray
    w-1/2
    md:w-full
    sm:w-full
    `}
`;
const Yellow = styled.span`
  ${tw`
    text-frame-yellow
    `}
`;

const SlimText = styled.span`
  ${tw`
    font-light
    text-white
    `}
`;

const Home = () => (
  <Container>
    <Head />
    <FrameImg src={home.frame.src} alt={home.frame.alt} />
    <SubHeading>{home.subheading}</SubHeading>
    <Heading>
      <h1>
        <Yellow>FRAME</Yellow>
      </h1>
      <SlimText>BOI</SlimText>
    </Heading>
    <Description>{home.description}</Description>
    <Link to='/frame'>
      <Button>{home.button}</Button>
    </Link>
  </Container>
);

export default Home;
