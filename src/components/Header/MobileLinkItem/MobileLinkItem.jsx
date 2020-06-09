import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from '../../Text'

const StyledLinkItem = styled(Link)`
  font-size: ${props => props.fontSize};
  border-top: solid 0.1em #fff;
  border-bottom: solid 0.1em #fff;
  background-color: ${props => props.theme.green};
  text-decoration: none;
  width:100%;
  text-align: center;
`

const StyledText = styled(Text)`
  font-size: 0.8em;
  color: #fff;
`

function MobileLinkItem (props) {
  return (
    <StyledLinkItem {...props}><StyledText>{props.children}</StyledText></StyledLinkItem>
  )
}

export default MobileLinkItem
