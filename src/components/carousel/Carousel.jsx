import React from 'react';

export default ({ frames, setSelectedFrame }) => (
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
