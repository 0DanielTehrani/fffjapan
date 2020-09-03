import React from 'react'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'
import GDCAHeading2 from './GDCAHeading2'
import GDCADivider from './GDCADivider'

const StyledSectionHeading = styled.div
`
`

function SectionHeading (props) {
  const { title } = props
  return (
    <StyledSectionHeading>
      <GDCAHeading2 color={props.theme.blue}>{title}</GDCAHeading2>
      <GDCADivider />  
    </StyledSectionHeading>
  )
}

export default withTheme(SectionHeading)
