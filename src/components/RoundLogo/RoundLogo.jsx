import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import logoWebp from './fffjapan_logo.webp'
import logo from './fffjapan_logo.png'
import media from 'styled-media-query'

const StyledRoundLogo = styled.img`
  width: ${props => props.width};
  height: auto;
`

function RoundLogo (props) {
  return <StyledRoundLogo src={isWebpSupported() ? logoWebp : logo} width={props.width}/>
}

export default RoundLogo
