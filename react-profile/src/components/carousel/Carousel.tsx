import * as React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Carousel} from 'react-responsive-carousel'
import Slider from "react-slick";
import {Container, makeStyles} from '@material-ui/core'

import Item from './Item'

interface Props {
  image: string | undefined
}

const FrameCarousel: React.FC<Props> = ({image}) => {
  const classes = useStyles();

  const data = [
    {name: 'Frame1'},
    {name: 'Frame2'},
    {name: 'Frame3'},
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: classes.sliderdiv,
  };
  
  return (
    <Container className={classes.root}>
      <Slider {...settings}>
        {data.map(frame => (
          <Item cardName={frame.name} image={image} />
        ))}
      </Slider>
    </Container>
  )
}


export default FrameCarousel

const useStyles = makeStyles(() => ({
  sliderdiv: {
    width: 550,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
}))