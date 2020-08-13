import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import slider from './gda-slider-a.jpg'
import { useHistory } from "react-router-dom";
import { GDA_APPLICATION_PAGE_URL } from '../../../constants'


const GDABannerContainer = styled.div
`
  position: relative;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button
`
  position: absolute;
  right: 3%;
  top: 70%;
  width: 163px;
  height: 50px;
  ${media.greaterThan('medium')`
    width: 346px;
    height: 100px;
  `}
  ${media.greaterThan('large')`
    width: 470px;
    height: 157px;
  `} 
  
  background-color: transparent;
  border: 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

function GDABanner () {
  const history = useHistory();

  return (
    <GDABannerContainer>
      <StyledImage src={slider} />
      <Button onClick={() => {history.push(GDA_APPLICATION_PAGE_URL)}}></Button>
    </GDABannerContainer>
  )
}

export default GDABanner
