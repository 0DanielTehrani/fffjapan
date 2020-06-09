import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './bee.webp'
import img from './bee.png'

const StyledBee = styled.img`
  width: 102.816px;
`

function Bee (props) {
  return (
    <StyledBee {...props} src={isWebpSupported() ? imgWebp : img}>{props.children}</StyledBee>
  )
}

export default Bee
