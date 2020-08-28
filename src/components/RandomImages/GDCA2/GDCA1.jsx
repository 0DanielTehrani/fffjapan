import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './website_04.png'
import img from './website_04.png'

const StyledGDCA1 = styled.img`
  width: ${props => props.width || '190px'};
`

function GDCA1 (props) {
  return (
    <StyledGDCA1 {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default GDCA1
