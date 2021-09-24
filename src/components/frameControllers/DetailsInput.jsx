import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

const Container1 = styled.h1`
  ${tw`
 mt-3
 py-2
 bg-color-new
 rounded-lg
`}
`;

const Container2 = styled.h1`
  ${tw`
  mt-3
  bg-color-new
  rounded-lg
  pt-2
`}
`;

const Inputs = ({
  checked,
  setChecked,
  handleChange,
  uploadedImage,
  setUploadedImage,
  userName,
  setUsername,
  guildName,
  setGuildname,
}) => (
  <div>
    <Container1>
      <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
    </Container1>
    <Container2>
      <CustomText
        checked={checked}
        setChecked={setChecked}
        handleChange={handleChange}
        userName={userName}
        setUsername={setUsername}
        guildName={guildName}
        setGuildname={setGuildname}
      />
    </Container2>
  </div>
);

export default Inputs;
