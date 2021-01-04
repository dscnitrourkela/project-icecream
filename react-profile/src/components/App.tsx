import React, {useState} from 'react'
import ImageUploader from 'react-images-upload';
import {makeStyles} from '@material-ui/core'
import Cropper from 'react-easy-crop'


// import FrameCarousel from './carousel/Carousel'

const App: React.FC = () => {
  const [image, setImage] = useState<null | File>(null)
  const [crop, setCrop] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [zoom, setZoom] = useState<number>(1)
  const [aspect, setAspect] = useState<number>(1/1)

  return (
    <div>
      <h1>Hello Typescript!</h1>
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Choose images'
        onChange={async (picture) => {setImage(picture[0])}}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={5242880 * 2}
        singleImage={true}
      />
      {image && (
        <div
        style={{
          height: 576 + 64,
          width: 576 + 64,
          overflow: 'hidden',
          backgroundImage: 'url(/frame.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
          <Cropper
              image={image ? URL.createObjectURL(image) : ''}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              minZoom={1}
              restrictPosition={false}
              cropSize={{ width: 512, height: 512 }}
              onCropChange={(crop: {x: number, y: number}) => setCrop(crop)}
              onCropComplete={() => console.log(crop)}
              onZoomChange={(zoom: number) => setZoom(zoom)}
              style={{
                containerStyle: {
                  width: 512,
                  height: 512,
                  overflow: 'hidden',
                  position: 'absolute',
                  top: 64,
                  left: 64,
                },
                mediaStyle: {
                  objectFit: 'cover',
                  objectPosition: 'center top',
                },
                cropAreaStyle: {
                  boxShadow: '0 0 0 0',
                },
              }}
          /> 
        </div>
      )}
      
    </div>
  )
}

export default App

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: 600,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
}))