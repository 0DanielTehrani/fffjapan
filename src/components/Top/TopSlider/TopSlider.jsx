import React from 'react'
import styled from 'styled-components'
import GDABannerB from '../GDABannerB'
import LargeImage from '../LargeImage'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function TopSlider () {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
      <GDABannerB />
      <LargeImage />
    </Carousel>
  )
}

export default TopSlider
