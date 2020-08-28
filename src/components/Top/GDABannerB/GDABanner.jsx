import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import slider from './20200827_gdca_slider_00.jpg'
import { useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
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
  top: 85%;
  width: 138px;
  height: 30px;
  ${media.greaterThan('medium')`
    width: 240px;
    height: 60px;
  `}
  ${media.greaterThan('large')`
    width: 370px;
    height: 80px;
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
      <HashLink to="#gdca-home" smooth>
        <Button></Button>
      </HashLink>
    </GDABannerContainer>
  )
}

export default GDABanner
