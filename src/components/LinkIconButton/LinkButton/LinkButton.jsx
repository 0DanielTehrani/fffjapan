import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledExternalLinkButton = styled.a`
  z-index: ${props => props.zIndex || 1};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`

const StyledLinkButton = styled(Link)`
  z-index: ${props => props.zIndex || 1};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`

function LinkButton (props) {
  return props.href.includes('http')
    ? <StyledExternalLinkButton {...props} target='_block'>{props.children}</StyledExternalLinkButton>
    : <StyledLinkButton to={props.href} {...props}>{props.children}</StyledLinkButton>
}

export default LinkButton
