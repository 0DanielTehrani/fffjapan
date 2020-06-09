import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './flower.webp'
import img from './flower.png'

const StyledFlower = styled.img`
  width: 83.349px;
`

function Flower (props) {
  return (
    <StyledFlower {...props} src={isWebpSupported() ? imgWebp : img}>{props.children}</StyledFlower>
  )
}

export default Flower
