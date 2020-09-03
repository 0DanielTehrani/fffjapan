import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import GDCADivider from './GDCADivider'

const StyledGDCAHeading3 = styled.div
`
`

const Title = styled(Text)
`
  color: ${props => props.theme.color || '#000'};
  font-size: 1.2rem;
` 

function GDCAHeading3 (props) {
  const { color, children } = props
  return (
    <StyledGDCAHeading3>
      <Title color={color} bold>{children}</Title>
    </StyledGDCAHeading3>
  )
}

export default GDCAHeading3
