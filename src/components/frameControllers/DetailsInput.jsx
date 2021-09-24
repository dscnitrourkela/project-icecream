import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

const Container = styled.div`
  ${tw`
 w-94
 mt-3
 py-2
 bg-color-new
 rounded-lg
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
  <>
    <Container>
      <Upload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
    </Container>
    <Container>
      <CustomText
        checked={checked}
        setChecked={setChecked}
        handleChange={handleChange}
        userName={userName}
        setUsername={setUsername}
        guildName={guildName}
        setGuildname={setGuildname}
      />
    </Container>
  </>
);

export default Inputs;
