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
  margin-bottom: 3em;
`

const UpperHalfContainer = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('large')`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}
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
  ${media.lessThan('large')`
    width: 90%;
    margin: auto;
    margin-top: 40px;
  `}
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
            <StyledLinkItem fontSize={fontSize} to='/gdca-demand' selected={pathname === '/gdca-demand' }>私たちが求めること</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/gdca-join' selected={pathname === '/gdca-join' }>参加する</StyledLinkItem>
            <StyledLinkItem fontSize={fontSize} to='/gda-application-form' selected={pathname === '/gda-application-form' }> 企画する</StyledLinkItem>
            <StyledLinkItem style={{ 'display': 'none' }} fontSize={fontSize} to='/gdca-sharepack' selected={pathname === '/' }>シェアパック</StyledLinkItem>
            <StyledLinkItem style={{ 'display': 'none' }} fontSize={fontSize} to='/gdca-endorsements' selected={pathname === '/' }>賛同団体</StyledLinkItem>
          </StyledLinkItems>
      </UpperHalfContainer>
    </StyledHeader>
  )
}

export default withTheme(withRouter(GDCAHeaderDesktop))
