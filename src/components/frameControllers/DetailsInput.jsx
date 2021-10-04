import React from 'react';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

const Inputs = ({
  checked,
  setchecked,
  checkedGuild,
  setcheckedGuild,
  handleChange,
  handleChangeGuild,
  uploadedImage,
  setUploadedImage,
  userName,
  setUsername,
  guildName,
  setGuildname,
  setHeight,
  setWidth,
}) => (
  <div>
    <Upload
      uploadedImage={uploadedImage}
      setUploadedImage={setUploadedImage}
      setHeight={setHeight}
      setWidth={setWidth}
    />
    <CustomText
      checked={checked}
      checkedGuild={checkedGuild}
      setchecked={setchecked}
      setcheckedGuild={setcheckedGuild}
      handleChange={handleChange}
      handleChangeGuild={handleChangeGuild}
      userName={userName}
      setUsername={setUsername}
      guildName={guildName}
      setGuildname={setGuildname}
    />
  </div>
);

export default Inputs;
