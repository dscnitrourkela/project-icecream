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
  border-radius: 8px;
  margin-left: 10px;
  border: none;
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
            style={{ display: 'none' }}
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
            style={{ display: 'none' }}
            id={bgId}
            onChange={(e) => setBgColors(e.target.value)}
            />
        </CustomButton>

        <CustomButton onClick={handleAlignment}>
            {renderIcon()}
        </CustomButton>

        <CustomButton>
         <input
            list="list-font"
            type="text"
            value={fontFamily}
            style={{ outline: 'none', border: 'none' }}
            placeholder="Font Type"
            onChange={(e) => setFontFamily(e.target.value)}
         />
            <datalist id="list-font" style={{ color: 'black'}}>
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