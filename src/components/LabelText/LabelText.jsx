import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const StyledLabelText = styled.span`
  color: ${props => props.color || props.theme.textColor};
  background-color: ${props => props.backgroundColor || '#fff'};
  font-size: ${props => props.fontSize || '1em'};
  font-family: ${props => props.theme.fontFamily};
  padding: 0px 5px;
`

function LabelText (props) {
  return (
    <StyledLabelText {...props}>
      {props.children}
    </StyledLabelText>
  )
}

export default LabelText
