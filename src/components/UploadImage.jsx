import React from "react";

// State Handlers
import { CANVAS_ACTIONS } from "../store/actions/frames.action";
import { useFrames } from "../store/contexts/frames.context";

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
      <label htmlFor='contained-button-file'>
        <button>Upload Image</button>
      </label>

      <input
        type='file'
        accept='image/*'
        style={{ display: "none" }}
        id='contained-button-file'
        maxFiles={1}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UploadImage;
