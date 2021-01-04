import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, Typography} from '@material-ui/core'
import Cropper from 'react-easy-crop'
interface Props {
  cardName: string,
  image: string | undefined
}

const Item: React.FC<Props> = ({cardName, image: userImage}) => {
  const classes = useStyles()
  const [image, setImage] = useState<string | undefined>(userImage)
  const [crop, setCrop] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [zoom, setZoom] = useState<number>(1)
  const [aspect, setAspect] = useState<number>(4/3)

  return (
    <Card className={classes.root}>
      {userImage ? (
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={(crop: {x: number, y: number}) => setCrop(crop)}
          onCropComplete={() => console.log(crop)}
          onZoomChange={(zoom: number) => setZoom(zoom)}
          style={{
            containerStyle: {
              width: 512,
              height: 512,
              overflow: 'hidden',
              marginTop: 8,
              backgroundColor: '#000',
            },
            mediaStyle: {
              objectFit: 'cover',
              objectPosition: 'center top',
            },
            cropAreaStyle: {
              backgroundImage: 'url(/frame.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: 512,
              height: 512,
            },
          }}
      />
      ) : (
        <img className={classes.image} src='/frame.png' alt="Frame"/>
      )}
    </Card>
  )
}

export default Item

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 600,
    backgroundColor: '#ddd',
  },
  image: {
    width: 550,
    height: 550,
    zIndex: 10,
  },
  userImage: {
    width: 600,
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0
  }
})