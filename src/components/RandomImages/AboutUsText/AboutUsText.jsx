import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import imgWebp from './about-us-text.webp'
import img from './about-us-text.png'

const StyledAboutUsText = styled.img`
  width: ${props => props.width || '199px'};
`

function AboutUsText (props) {
  return <StyledAboutUsText src={isWebpSupported() ? imgWebp : img} {...props}/>
}

export default AboutUsText
