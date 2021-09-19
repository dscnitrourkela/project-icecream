import React from 'react';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

const Inputs = ({
  uploadedImage,
  setUploadedImage,
  userName,
  setUsername,
  guildName,
  setGuildname,
}) => (
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
