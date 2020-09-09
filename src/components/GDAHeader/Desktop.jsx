import React from 'react'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { withRouter, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import headerImage from './header-image.png'

import LinkItem from '../LinkItem'

import Text from '../Text'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 6em;
`

const UpperHalfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 12px;
  }
`

const HeaderImage = styled.img
`
  width: 300px;
  height: auto;
`


const StyledLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    margin-left: 30px;
  }
`

const StyledLinkItem = styled(LinkItem)
`
  color: ${props => props.selected ? props.theme.ocher : props.theme.blue};
`

function GDCAHeaderDesktop (props) {
  const { pathname } = props.location
  const fontSize = '18px'
  return (
    <StyledHeader>
      <UpperHalfContainer>
          <StyledLogos>
            <HeaderImage src={headerImage} />
          </StyledLogos>
          <StyledLinkItems>
            <StyledLinkItem fontSize={fontSize} to='/gdca-demand' selected={pathname === '/gdca-demand' }>私たちがが求めること</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/gdca-join' selected={pathname === '/gdca-join' }>参加する</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/gda-application-form' selected={pathname === '/gda-application-form' }> 企画する</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/' selected={pathname === '/' }>シェアパック</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/' selected={pathname === '/' }>賛同団体</StyledLinkItem>
          </StyledLinkItems>
      </UpperHalfContainer>
    </StyledHeader>
  )
}

export default withTheme(withRouter(GDCAHeaderDesktop))
