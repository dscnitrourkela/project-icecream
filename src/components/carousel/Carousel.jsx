import React from 'react';

export default ({ frames, setSelectedFrame }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {Object.keys(frames).map((key) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <img
        key={key}
        onClick={() => setSelectedFrame(frames[key])}
        src={frames[key]}
        alt='some alt text'
        style={{ width: '70px', height: '70px', margin: '10px' }}
      />
    ))}
  </div>
);
