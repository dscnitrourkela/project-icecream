/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Carousel({ frames, setSelectedFrame }) {
  return(
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
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img
        key={key}
        onClick={() => setSelectedFrame(frames[key])}
        src={frames[key]}
        alt='some alt text'
        style={{ width: '50px', height: '50px', margin: '10px' }}
      />
    ))}
  </div>
  );
};
