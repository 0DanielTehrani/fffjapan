import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || props.theme.textColor};
  font-family: ${props => props.theme.fontFamilyLight};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  line-height: 1.625em;
`

function TextLight (props) {
  return (
    <StyledText {...props}>{props.children}</StyledText>
  )
}

export default TextLight
