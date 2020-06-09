import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

const StyledInstagramIcon = styled(Instagram)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`

function InstagramIcon (props) {
  return <StyledInstagramIcon {...props}/>
}

export default InstagramIcon
