import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-size: 1.5em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  text-decoration: underline;
`

function Text (props) {
  return (
    <StyledText {...props}>{props.children}</StyledText>
  )
}

export default Text
