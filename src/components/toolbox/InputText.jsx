import React from 'react';

import CustomButtons from './CustomTools';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';

const Container2 = styled.div`
  ${tw`
  mt-3
  bg-frame-xgray
  rounded-lg
  pt-2
`}
`;

const Heading1 = styled.h1`
  ${tw`
  w-3/4
  text-2xl
  text-color-bright
  font-normal
  col-span-2
  pb-2
  pl-4
  text-left
  mb-2
`}
`;

const Section1 = styled.div`
  ${tw`
  flex
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-0
    px-1
    md:grid grid-cols-1 auto-cols-max
  `}
`;

const Toggle = styled.div`
  ${tw`
     pl-5
  `}
`;

const FormFillup = styled.input`
  width: 93%;
  padding: 12px 13px;
  margin: auto;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #666666;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #333333;
  color: #666666;
  font-size: 1rem;
`;

const CustomText = ({
  userName,
  guildName,
  setUsername,
  setGuildname,
  checked,
  checkedGuild,
  handleChange,
  handleChangeGuild,
}) => (
  <Container2>
    <Section1>
      <Heading1>Name</Heading1>
      <label htmlFor='material-switch'>
        <Toggle>
          <Switch
            checked={checked}
            onChange={handleChange}
            onColor='#666666'
            onHandleColor='#ffffff'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={13}
            width={30}
            className='react-switch'
            id='material-switch'
          />
        </Toggle>
      </label>
    </Section1>
    {checked && (
      <Section2>
        <FormFillup
          type='text'
          value={userName}
          name='username'
          placeholder='Your Name'
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomButtons />
      </Section2>
    )}

    <Section1 style={{ paddingTop: '25px' }}>
      <Heading1>Guild</Heading1>
      <label htmlFor='material-switch'>
        <Toggle>
          <Switch
            checked={checkedGuild}
            onChange={handleChangeGuild}
            onColor='#666666'
            onHandleColor='#ffffff'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={13}
            width={30}
            className='react-switch'
            id='material-switch'
          />
        </Toggle>
      </label>
    </Section1>
    {checkedGuild && (
      <Section2 style={{ paddingBottom: '20px' }}>
        <FormFillup
          type='text'
          value={guildName}
          name='guildname'
          placeholder='Your Guild'
          onChange={(e) => setGuildname(e.target.value)}
        />
        <CustomButtons />
      </Section2>
    )}
  </Container2>
);

export default CustomText;
