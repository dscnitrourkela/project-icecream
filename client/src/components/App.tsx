import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

import FrameCarousel from './carousel/Carousel';

const App: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<null | File>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect] = useState<number>(1 / 1);

  const data = [
    {
      resolution: 3840,
      width: 384,
      shape: 'square',
      frame: '/frame.png',
    },
    {
      resolution: 3840,
      width: 384,
      shape: 'square',
      frame: '/frame2.jpg',
    },
    {
      resolution: 3840,
      width: 384,
      shape: 'square',
      frame: '/frame.png',
    },
  ];

  return (
    <div>
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Choose images'
        onChange={(picture: File[]) => {
          setUploadImage(picture[0]);
        }}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={5242880 * 2}
        singleImage={true}
      />

      <FrameCarousel
        uploadImage={uploadImage}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        setCrop={setCrop}
        setZoom={setZoom}
        data={data}
      />
    </div>
  );
};

export default App;
