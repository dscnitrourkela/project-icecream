import React from 'react';

export default ({ uploadedImage, setUploadedImage }) => (
  <div>
    <input
      type='file'
      accept='image/*'
      id='contained-button-file'
      onChange={(e) => setUploadedImage(URL.createObjectURL(e.target.files[0]))}
    />
    {/* <label htmlFor="contained-button-file">
        <button variant="contained" color="primary" component="span">
          Upload
        </button>
      </label> */}
  </div>
);
