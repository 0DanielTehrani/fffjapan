import React from 'react'
import styled from 'styled-components'

const StyledLinkButton = styled.a`
  z-index: ${props => props.zIndex || 1};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`

function LinkButton (props) {
  return <StyledLinkButton {...props}>{props.children}</StyledLinkButton>
}

export default LinkButton
