import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLinkItem = styled(Link)`
  color: ${props => props.color || props.theme.textColor};
  background-color: ${props => props.backgroundColor || 'none'};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.theme.fontFamily};
  text-decoration: none;
`

function LinkItem (props) {
  return (
    <StyledLinkItem {...props}>{props.children}</StyledLinkItem>
  )
}

export default LinkItem
