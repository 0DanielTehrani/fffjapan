import React from 'react'
import styled from 'styled-components'
import GDABannerB from '../GDABannerB'
import LargeImage from '../LargeImage'
import EndorseBannerB from '../EndorseBannerB'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow'
import './style.css'

const PrevArrowTemplate = styled(RightArrow)
``

const NextArrowTemplate = styled.button
``

const renderArrowPrev = () => {
  return <PrevArrowTemplate />
}

const renderArrowNext = () => {
  return <NextArrowTemplate/>
}

function TopSlider () {
  return (
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={3000} 
      showStatus={false}
      >
      <EndorseBannerB />
      <GDABannerB />
      <LargeImage />
    </Carousel>
  )
}

export default TopSlider
