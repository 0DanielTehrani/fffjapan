import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const StyledSentenceContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  color: #3C3C3C;
  padding: 10px;
`

function SentenceContainer (props) {
  return (
    <StyledSentenceContainer>
      {props.children}
    </StyledSentenceContainer>
  )
}

export default SentenceContainer;
