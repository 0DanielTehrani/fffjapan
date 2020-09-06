import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import Text from '../Text'
import { HashLink } from 'react-router-hash-link'

const StyledDemand = styled.div
`
`

const TextNum = styled(Text)
`
  color: ${props => props.theme.lime};
  font-size: 2.5rem;
`

const TextUnderline = styled(Text)
`
  text-decoration: underline;
  color: ${props => props.theme.blue};
  font-size: 1.8rem;
`


function Demand (props) {
  const { num, text, to } = props
  return (
    <StyledDemand>
      <TextNum bold>{num}</TextNum><br />
      <HashLink to={to}><TextUnderline bold>{text}</TextUnderline></HashLink>
    </StyledDemand>
  )
  
}

export default Demand
