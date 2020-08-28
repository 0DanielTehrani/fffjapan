import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './gdca-join-us.png'
import img from './gdca-join-us.png'

const StyledGDCAJoinUs = styled.img`
  width: ${props => props.width || '183.88px'};
`

function GDCAJoinUs (props) {
  return (
    <StyledGDCAJoinUs {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default GDCAJoinUs
