import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './cards17.png'
import img from './cards17.png'

const StyledClimateJusticeNow = styled.img`
  width: ${props => props.width || '190px'};
`

function ClimateJusticeNow (props) {
  return (
    <StyledClimateJusticeNow {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default ClimateJusticeNow
