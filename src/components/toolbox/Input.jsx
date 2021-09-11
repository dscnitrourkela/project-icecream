import React from 'react';
import ImageUpload from './ImageUpload';

const Inputs = ({ name, setName, guildName, setGuildName, uploadedImage, setUploadedImage }) => (
  <div>
    <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
    {/* <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
    <input
      value={guildName}
      onChange={(e) => setGuildName(e.target.value)}
      placeholder='Guild Name'
    /> */}
  </div>
);

export default Inputs;
