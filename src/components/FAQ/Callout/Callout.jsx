import React from 'react'
import styled from 'styled-components'

const StyledCallout = styled.div`
  width: 17.8em;
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
    top: 55%;
    left: -1.59em;
    border-style: solid;
    border-color: transparent ${props => props.color} transparent transparent;
    border-width: 0 1.5em 1.5em 0;
  }
  &:after {
    top: 60%;
    left: -0.9545em;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    border-width: 0 1.36em 1.36em 0;
  }
`

function Callout (props) {
  return (
    <StyledCallout {...props}>{props.children}</StyledCallout>
  )
}

export default Callout
