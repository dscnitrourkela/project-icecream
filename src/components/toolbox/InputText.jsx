import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';

// Components
import Container from '../shared/Container';

const Heading1 = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 8%;
`;

const Section1 = styled.div`
  ${tw`
    pl-0
    md:grid grid-cols-2 auto-cols-max
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-4
    p-0
    md:grid grid-cols-1 auto-cols-max
  `}
`;

const Toggle = styled.div`
  ${tw`
     pl-20
  `}
`;

const FormFillup = styled.input`
  width: 90%;
  padding: 12px 32px;
  padding-left: 10px;
  margin: auto;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: black;
  font-size: 1rem;
`;

const CustomText = ({ userName, guildName, setUsername, setGuildname }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prevCheck) => !prevCheck);

  return (
    <Container>
      <Section1>
        <Heading1>Custom Text</Heading1>
        <label htmlFor='material-switch'>
          <Toggle>
            <Switch
              checked={checked}
              onChange={handleChange}
              onColor='#666666'
              onHandleColor='#17171D'
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
          <FormFillup
            type='text'
            value={guildName}
            name='guildname'
            placeholder='Guild Name'
            onChange={(e) => setGuildname(e.target.value)}
          />
        </Section2>
      )}
    </Container>
  );
};

export default CustomText;
