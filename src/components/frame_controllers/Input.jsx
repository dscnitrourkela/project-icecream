import React from 'react';
import Upload from '../toolbox/upload';
import CustomText from '../toolbox/textinput';

const Inputs = ({ 
  uploadedImage, 
  setUploadedImage, 
  username, 
  setUsername, 
  guildname, 
  setGuildname }) => (
    
  <div>
    <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
    <CustomText 
      username={username}
      setUsername={setUsername}
      guildname={guildname}
      setGuildname={setGuildname}
    />
  </div>
);

export default Inputs;
