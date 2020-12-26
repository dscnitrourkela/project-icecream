import * as React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import Item from './Item'

const data = [
  {name: 'Frame1'},
  {name: 'Frame2'},
  {name: 'Frame3'},
]

const FrameCarousel: React.FC = () => {
  return (
    <Carousel width='40%'>
      {data.map(frame => (
        <Item cardName={frame.name} />
      ))}
    </Carousel>
  )
}


export default FrameCarousel