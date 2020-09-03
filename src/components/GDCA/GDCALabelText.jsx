import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

const StyledGDCALabelText = styled(Text)
`
  background-color: ${props => props.theme.lime};
  color: #000;
  font-size: 1.4rem;
  padding: 5px;
  margin: auto;
`

function GDCALabelText (props) {
  return (
    <StyledGDCALabelText bold>
    {props.children}
    </StyledGDCALabelText>
  )
}

export default GDCALabelText
