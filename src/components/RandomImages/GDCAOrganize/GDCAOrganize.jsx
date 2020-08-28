import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './gdca-organize.png'
import img from './gdca-organize.png'

const StyledGDCAOrganize = styled.img`
  width: ${props => props.width || '183.88px'};
`

function GDCAOrganize (props) {
  return (
    <StyledGDCAOrganize {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default GDCAOrganize
