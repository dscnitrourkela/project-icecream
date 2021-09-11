import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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
const Head = styled.div`
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
const ButtonContainer = styled.div`
  ${tw`
    row-span-2
    p-5
    `}
`;
const Button = styled.button`
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
`
function HomePanel() {
  return (
    <Container>
      <Head>
        <Logo
          src='https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/landing%20page/bzohucxsncjlllm2hx26.png'
          alt='logo'
        />
        <p>HackNITR 3.0</p>
      </Head>
      <FrameImg
        src='https://res.cloudinary.com/dscnitrourkela/image/upload/icecream_frames/landing%20page/kc34v2ls33bw8koeklb2.png'
        alt='frame image'
      />
      <SubHeading>HackNITR 3.0 Presents</SubHeading>
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
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nemo nisi blanditiis officia
        tempora. Voluptate molestiae dolorum vel velit quaerat.
      </Description>
      <ButtonContainer>
        <Button>continue</Button>
      </ButtonContainer>
    </Container>
  );
}

export default HomePanel;
