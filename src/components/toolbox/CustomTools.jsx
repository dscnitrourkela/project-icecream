import React from 'react';

// Libraries
import styled from 'styled-components';

import tool from '../../../config/tool';

const ButtonContainer = styled.div`
  display: flex;
  gap: 28px;
  margin-left: 11px;
  margin-top: 8px;
`;

const CustomButton = styled.button`
  background-color: white;
  padding: 5px 8px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

function CustomButtons() {
  return (
    <ButtonContainer>
      {tool.tool.map(({ id, img }) => (
        <CustomButton key={id}>
          <img src={img} alt='' />
        </CustomButton>
      ))}
    </ButtonContainer>
  );
}

export default CustomButtons;
