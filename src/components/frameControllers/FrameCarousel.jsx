import React from 'react';

const Carousel = ({ frames, setSelectedFrame }) => (
  <div
    style={{
      display: 'flex',
      width: '280px',
      whiteSpace: 'nowrap',
      flexWrap: 'nowrap',
      overflow: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    }}
  >
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
  </div>
);

export default Carousel;
