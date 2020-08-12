import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const StyledHeading = styled.div
`
  text-align: center;
  font-size: 2.6em;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.gdaPrimaryColor};
`

function Heading (props) {
  return (
    <StyledHeading>
      {props.children}
    </StyledHeading>
  )
}

export default Heading;
