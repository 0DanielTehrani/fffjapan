import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import logoWebp from './fffjapan.webp'
import logo from './fffjapan.png'

const StyledLogo = styled.img`
  width: ${props => props.width};
  height: auto;
`

function Logo (props) {
  return <StyledLogo src={isWebpSupported() ? logoWebp : logo} width={props.width}/>
}

export default Logo
