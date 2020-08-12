import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const StyledHeading2 = styled.div
`
  text-align: center;
  font-size: 2.1em;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.black};
`

function Heading2 (props) {
  return (
    <StyledHeading2>
      {props.children}
    </StyledHeading2>
  )
}

export default Heading2;
