import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

const StyledCreditNotation = styled(Text)`
  color: ${props => props.color || '#fff'};
  font-size: 0.5em;
`

function CreditNotation (props) {
  return <StyledCreditNotation {...props}>©{props.creditTo}</StyledCreditNotation>
}

export default CreditNotation
