import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import imgWebp from './shoes1-2.png'
import img from './shoes1-2.png'

const StyledShoesHand = styled.img`
  width: ${props => props.width || '190px'};
`

function ShoesHand (props) {
  return (
    <StyledShoesHand {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default ShoesHand
