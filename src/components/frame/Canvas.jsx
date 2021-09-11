import React from 'react';

export default ({ name, guildName, uploadedImage, selectedFrame }) => (
  <div
    style={{
      backgroundColor: 'f8f8f8',
      position: 'relative',
      display: 'inline-block',
      height: '550px',
    }}
  >
    <img src={uploadedImage} alt='some alt' style={{ width: '100px', height: '100px' }} />
    <img
      src={selectedFrame}
      alt='some random alt'
      style={{
        width: '500px',
        height: '500px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        // transform: uploadedImage ? 'translate(0%, 0%)' : 'translate(-50%, 0%)',
      }}
    />
    <h3>{name}</h3>
    <h3>{guildName}</h3>
  </div>
);
