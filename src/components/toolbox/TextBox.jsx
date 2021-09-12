import React, { useState } from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from "react-switch";

const Container = styled.div`
  ${tw`
    font-roboto
    pt-2
    grid
    grid-rows-1
    grid-cols-1
    border-solid border-2 border-background-darker
    bg-background-darker
    rounded-lg
  `}
`;

const Heading1 = styled.h1`
  ${tw`
  text-2xl
  font-normal
  `}
`;

const Section1 = styled.div`
  ${tw`
    pl-2
    md:grid grid-cols-2 auto-cols-max
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-4
    p-2
    md:grid grid-cols-1 auto-cols-max
  `}
`;

const Toggle = styled.div`
  ${tw`
     pl-20
  `}
`;
const FormFillup = styled.input`
  ${tw`
   border rounded w-full 
   border-gray-50
   py-3 px-3 text-black
   mb-4
   text-xl 
  `}
`;


export default function CustomText({ 
   username,
   guildname, 
   setYourName, 
   setGuildname, 
  }) {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked({ checked });
  }

  return(
      <Container>
        <Section1>
          <Heading1>Custom Text</Heading1>
          <label htmlFor="material-switch">
            <Toggle>
              {/* <button type="button" onClick={handleToggle}>Check</button> */}
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#666666"
                onHandleColor="#17171D"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
               />
            </Toggle>
          </label>
        </Section1>
        { checked &&
         <Section2>
            <FormFillup
              type='text'
              value={username}
              name='username'
              placeholder='Your Name'
              onChange={(e) => setYourName(e.target.value)}
            />
            <FormFillup
              type='text'
              value={guildname}
              name='guildname'
              placeholder='Guild Name'
              onChange={(e) => setGuildname(e.target.value)}
            />
        </Section2> }
      </Container>
  )
}