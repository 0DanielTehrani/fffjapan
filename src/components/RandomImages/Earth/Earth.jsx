import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './earth.webp'
import img from './earth.png'

const StyledEarth = styled.img`
  width: ${props => props.width || '190px'};
`

function Earth (props) {
  return (
    <StyledEarth {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default Earth
