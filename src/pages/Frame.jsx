import React from "react";

// Libraries
import styled from 'styled-components';

// Components
import Canvas from "../components/Canvas";
import UploadImage from '../components/UploadImage';
import Controller from '../components/Controller';
import Download from '../components//Download';

const GridContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 20% auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Column1 = styled.div`
  width: 50%;
  margin-right: 1rem;
  background: #333333;
  padding: 1.5rem 1rem;
  border-radius: 7px;
`

const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const Frames = () => {
  return (
    <GridContainer>
      <Column1>
        <Canvas />
      </Column1>

      <Column2>
        <UploadImage />
        <Controller />
        <Download />
      </Column2>
    </GridContainer>
  );
};

export default Frames;
