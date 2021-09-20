import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CarouselContainer = styled.div`
  ${tw`
    flex
    /* w-72
    whitespace-nowrap
    flex-nowrap
    overflow-auto
    justify-center
    items-center
    m-auto */
    `}
`;

const Carousel = ({ frames, setSelectedFrame }) => (
  <CarouselContainer>
    {Object.keys(frames).map((key) => (
      <span
        key={key}
        onClick={() => setSelectedFrame(frames[key])}
        onKeyDown={() => setSelectedFrame(frames[key])}
        role='button'
        tabIndex={0}
      >
        <img
          src={frames[key]}
          alt='some alt text'
          style={{ width: '50px', height: '50px', margin: '10px' }}
        />
      </span>
    ))}
  </CarouselContainer>
);

export default Carousel;
