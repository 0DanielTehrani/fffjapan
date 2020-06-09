import React from 'react'
import styled from 'styled-components'
import { Web } from '@styled-icons/foundation/Web'

const StyledWebIcon = styled(Web)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`

function WebsiteIcon (props) {
  return <StyledWebIcon {...props}/>
}

export default WebsiteIcon
