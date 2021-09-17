import React from 'react';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

function Inputs({
  uploadedImage,
  setUploadedImage,
  userName,
  setUsername,
  guildName,
  setGuildname,
}) {
  return (
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
}

export default Inputs;
