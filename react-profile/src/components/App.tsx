import React, {useState} from 'react'
import FrameCarousel from './carousel/Carousel'
import ImageUploader from 'react-images-upload';



const App: React.FC = () => {
  const [image, setImage] = useState<undefined | File>()

  return (
    <div>
      <h1>Hello Typescript!</h1>
      <FrameCarousel />
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Choose images'
        onChange={(picture) => setImage(picture[0])}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880 * 2}
      />
      {image && (
        <img src={URL.createObjectURL(image)} alt='imgae' />
      )}
    </div>
  )
}

export default App