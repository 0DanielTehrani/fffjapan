import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const StyledCallout2 = styled.div`
  font-size: 1.375em;
  background-color: #fff;
  color: ${props => props.color};
  border: solid 0.22em;
  border-color: ${props => props.color};
  padding: 1.3356em 1.02375em;
  font-family: ${props => props.theme.fontFamily};
  position: relative;
  white-space: pre-line;
  &:after, &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin: auto;
  }
  &:before {
    top: -1.5em;
    border-style: solid;
    border-color: transparent transparent ${props => props.color} transparent;
    border-width: 0 1.5em 1.5em 1.5em;
  }
  &:after {
    top: -1.2em;
    left: 1.16em;
    border-style: solid;
    border-color: transparent  transparent #fff transparent;
    border-width: 0 1.36em 1.36em 1.36em;
  }
`

function Callout2 (props) {
  return (
    <StyledCallout2 {...props}>{props.children}</StyledCallout2>
  )
}

export default Callout2
