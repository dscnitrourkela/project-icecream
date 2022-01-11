import React from "react";

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

// State Handlers
import { CANVAS_ACTIONS } from "../store/actions/frames.action";
import { useFrames } from "../store/contexts/frames.context";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 7px;
  background: #333333;
  padding: 1rem;

  color: #c7c7c7;
  margin-bottom: 1.5rem;
`

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #c7c7c7;
  margin-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover, & *:hover {
    cursor: pointer;
  }
`

const UploadImage = () => {
  /**
   * Following is a destructuring way to get only dispatch
   */
  const [state, dispatch] = useFrames();

  const handleInputChange = (e) => {
    /**
     * The following code is to get the image data and
     * the dimensions of the uploaded image. In order to get this
     * we are using FileReader.
     */
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const i = new Image();
      i.src = URL.createObjectURL(file);

      i.onload = () => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          dispatch({
            type: CANVAS_ACTIONS.UPLOAD_IMAGE,
            payload: {
              image: i.src,
              width: i.width,
              height: i.height,
            },
          });

          const aspectRatio = i.width / i.height;
          const stageHeight = state.stageDetails.height;
          const stageWidth = state.stageDetails.width;
          dispatch({
            type: CANVAS_ACTIONS.UPDATE_IMAGE_RENDERED_DIMENSIONS,
            payload: {
              width: aspectRatio > 1 ? stageWidth : stageHeight * aspectRatio,
              height: aspectRatio > 1 ? stageWidth / aspectRatio : stageHeight,
            },
          });
        };
      };
    }
  };

  return (
    <div>

      <Container>
        <h3 style={{width: 'calc(100% - 70px)'}}>
					Click on the upload icon to upload image. You can repeat this step to choose another image.
				</h3>

        <IconContainer>
          <label htmlFor='contained-button-file'>
            <FontAwesomeIcon icon={faUpload} style={{ color: '#000', fontSize: '23px' }} />
          </label>
        </IconContainer>
      </Container>

      <input
        type='file'
        accept='image/*'
        style={{ display: "none" }}
        id='contained-button-file'
        maxfiles={1}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UploadImage;
