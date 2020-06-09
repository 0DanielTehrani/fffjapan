import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './organize-large.webp'
import img from './organize-large.png'

const StyledLargeImage = styled.img`
  width: ${props => props.width || '39.875em'};
`

function LargeImage (props) {
  return (
    <StyledLargeImage {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default LargeImage
