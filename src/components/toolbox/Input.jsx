import React from 'react';
import ImageUpload from './ImageUpload';

const Inputs = ({ uploadedImage, setUploadedImage }) => (
  <div>
    <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
  </div>
);

export default Inputs;
