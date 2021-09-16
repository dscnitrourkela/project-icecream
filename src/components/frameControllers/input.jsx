import React from 'react';
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/textinput';

function Inputs({ 
  uploadedImage, 
  setUploadedImage, 
  userName, 
  setUsername, 
  guildName, 
  setGuildname }) {

  return(  
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
};

export default Inputs;
