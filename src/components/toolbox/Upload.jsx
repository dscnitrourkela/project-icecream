import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
  ${tw`
    font-roboto
    pt-2
    grid
    grid-rows-1
    grid-cols-1
    bg-background-darker
    border-solid border-2 border-gray-50
    mb-4
    rounded-xl
  `}
`;

const Section1 = styled.div`
  ${tw`
  md:grid grid-cols-3 auto-cols-max
  `}
`;

const Heading1 = styled.h1`
  ${tw`
  text-2xl
  font-normal
  pl-2
 `}
`;

const Description = styled.div`
  ${tw`
  text-lg
  text-frame-gray
  font-normal
  col-span-2
  p-2
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    pl-6
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    p-2
    rounded-full
    h-16 w-16 
    justify-center
    bg-background-darkest
  `}
`;

export default function Upload() {
    return(
       <Container>
         <Heading1>Upload Image</Heading1>
        <Section1>
         <Description>Click on the upload icon to upload image. You can repeat
             this step to choose another image.
         </Description>        
         <ButtonContainer>
          {/* <FontAwesomeIcon icon={["fas", "upload"]} /> */}         
          <Button><FontAwesomeIcon icon={faUpload} size="2x" style={{ color: "#fff" }} /></Button>
         </ButtonContainer> 
        </Section1>
       </Container>
    )
};