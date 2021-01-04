import React, {useState} from 'react'
import ImageUploader from 'react-images-upload';
import {makeStyles} from '@material-ui/core'
import Cropper from 'react-easy-crop'

import Modal from './Modal'

// import FrameCarousel from './carousel/Carousel'

const App: React.FC = () => {
  const [image, setImage] = useState<null | File>(null)
  const [crop, setCrop] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [zoom, setZoom] = useState<number>(1)
  const [aspect, setAspect] = useState<number>(1/1)

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Hello Typescript!</h1>
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Choose images'
        onChange={async (picture) => {
          handleOpen()
          setImage(picture[0])
        }}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={5242880 * 2}
        singleImage={true}
      />
      {/* {image && ( */}
        <Modal open={open} handleClose={handleClose}>
          <Cropper
              image={image ? URL.createObjectURL(image) : ''}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              minZoom={1}
              onCropChange={(crop: {x: number, y: number}) => setCrop(crop)}
              onCropComplete={() => console.log(crop)}
              onZoomChange={(zoom: number) => setZoom(zoom)}
              style={{
                containerStyle: {
                  width: 512,
                  height: 512,
                  // overflow: 'hidden',
                  // marginTop: 8,
                  position: 'absolute',
                  top: 0,
                  left: 0
                },
                mediaStyle: {
                  // objectFit: 'cover',
                  // objectPosition: 'center top',
                },
                cropAreaStyle: {
                  // backgroundImage: 'url(/frame.png)',
                  // backgroundPosition: 'center',
                  // backgroundSize: 'cover',
                  // width: 600,
                  // height: 600,
                },
              }}
          />
        </Modal>
      {/* // )} */}
      
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