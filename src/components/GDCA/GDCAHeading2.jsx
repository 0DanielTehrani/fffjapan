import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import GDCADivider from './GDCADivider'

const StyledGDCAHeading2 = styled.div
`
  text-align: center;
`

const Title = styled(Text)
`
  color: ${props => props.theme.color || props.theme.blue};
  font-size: 1.4rem;
` 

function GDCAHeading2 (props) {
  const { color, children } = props
  return (
    <StyledGDCAHeading2>
      <Title color={color} bold>{children}</Title>
    </StyledGDCAHeading2>
  )
}

export default GDCAHeading2
