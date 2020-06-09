import React from 'react'
import styled from 'styled-components'

const StyledTextBoard = styled.div`
  font-size: 1em;
  background-color: ${props => props.theme.beige};
  padding: 3.125em;
  padding-top: ${props => props.paddingTop || '3.125em'};
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
`

function TextBoard (props) {
  return (
    <StyledTextBoard {...props}>{props.children}</StyledTextBoard>
  )
}

export default TextBoard
