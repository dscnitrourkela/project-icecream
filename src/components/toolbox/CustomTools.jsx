import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, 
    faAlignJustify, 
    faAlignLeft, 
    faAlignRight, 
    faPenFancy 
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const ButtonContainer = styled.div`
  display: block; 
  margin-top: 2px;
  margin-right: 30px;
`;

const CustomButton = styled.button`
  background-color: white;
  padding: 6px 8px;
  padding-right: 3px;
  border-radius: 8px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const CustomButtonAlign = styled.button`
  background-color: white;
  padding: 6px 8px;
  border-radius: 8px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const CustomButtons = ({
 bgColors,
 setBgColors,
 fontColors,
 setFontColors,
 alignment,
 handleAlignment,
 fontFamily,
 setFontFamily,
 align,
 FontId,
 fontlist,
 bgId
}) => {

    const renderIcon = () => {
        switch (alignment) {
          case align[0]:
            return <FontAwesomeIcon icon={faAlignJustify} />
          case align[1]:
            return <FontAwesomeIcon icon={faAlignLeft} />
          case align[2]:
            return <FontAwesomeIcon icon={faAlignRight} />
          default:
            return <FontAwesomeIcon icon={faAlignJustify} />
        }
      };

  return (
    <ButtonContainer>
        <CustomButton>
            <label htmlFor={FontId}>
                <FontAwesomeIcon icon = { faA } />
            </label>
            <input 
            type='color'
            accept='color'
            value={fontColors}
            style={{ visibility: 'hidden', width: "1px", height: "1px" }}
            id={FontId}
            onChange={(e) => setFontColors(e.target.value)}
            />
        </CustomButton>
        <CustomButton>
            <label htmlFor={bgId}>
                <FontAwesomeIcon icon={ faPenFancy } />
            </label>
            <input 
            type='color'
            accept='color'
            value={bgColors}
            style={{ visibility: 'hidden', width: "1px", height: "1px" }}
            id={bgId}
            onChange={(e) => setBgColors(e.target.value)}
            />
        </CustomButton>

        <CustomButtonAlign onClick={handleAlignment}>
            {renderIcon()}
        </CustomButtonAlign>

        <CustomButton>
         <input
            list={fontlist}
            type="search"
            value={fontFamily}
            style={{ outline: 'none', border: 'none' }}
            placeholder="Font Type"
            onChange={(e) => setFontFamily(e.target.value)}
         />
            <datalist id={fontlist} >
              <option value = "Merriweather" aria-label="Merriweather" />
              <option value = "Comic Neue" aria-label="Comic Neue" />
              <option value = "Source Sans Pro" aria-label="Source Sans Pro" />
              <option value = "Space Mono" aria-label="Space Mono" />
              <option value = "Roboto" aria-label="Roboto" />
            </datalist>
        </CustomButton>
    </ButtonContainer>
  );
}

export default CustomButtons;