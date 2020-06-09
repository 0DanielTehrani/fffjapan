import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './arrow.webp'
import img from './arrow.png'

const StyledArrow = styled.img`
  width: 41.04px;
`

function Arrow (props) {
  return (
    <StyledArrow {...props} src={isWebpSupported() ? imgWebp : img}>{props.children}</StyledArrow>
  )
}

export default Arrow
