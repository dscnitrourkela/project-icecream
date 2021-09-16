import React from 'react';
import Upload from '../toolbox/upload';
import CustomText from '../toolbox/textinput';

const Inputs = ({ 
  uploadedImage, 
  setUploadedImage, 
  userName, 
  setUsername, 
  guildName, 
  setGuildname }) => (
    
  <div>
    <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
    <CustomText 
      userName={userName}
      setUsername={setUsername}
      guildName={guildName}
      setGuildname={setGuildname}
    />
  </div>
);

export default Inputs;
