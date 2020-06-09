import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import imgWebp from './climate-justice-now-text-image.webp'
import img from './climate-justice-now-text-image.png'

const StyledTextImage = styled.img`
  width: ${props => props.width || '7.75em'};
`

function TextImage () {
  return <StyledTextImage src={isWebpSupported() ? imgWebp : img} />
}

export default TextImage
