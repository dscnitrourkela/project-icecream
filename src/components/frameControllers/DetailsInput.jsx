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
  fontFamily,
  setFontFamily,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
  alignment,
  bgColorGuild,
  setBgColorGuild,
  fontColorGuild,
  setFontColorGuild,
  handleAlignment,
  fontFamilyGuild,
  setFontFamilyGuild,
  align,
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
      fontFamily={fontFamily}
      setFontFamily={setFontFamily}
      bgColor={bgColor}
      setBgColor={setBgColor}
      fontColor={fontColor}
      setFontColor={setFontColor}
      alignment={alignment}
      bgColorGuild={bgColorGuild}
      setBgColorGuild={setBgColorGuild}
      fontColorGuild={fontColorGuild}
      setFontColorGuild={setFontColorGuild}
      fontFamilyGuild={fontFamilyGuild}
      setFontFamilyGuild={setFontFamilyGuild}
      handleAlignment={handleAlignment}
      align={align}
    />
  </div>
);

export default Inputs;
