import React from 'react'
import styled, { withTheme } from 'styled-components'

import { withRouter, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

import LinkItem from '../LinkItem'
import MobileLinkItem from './MobileLinkItem'
import LinkMenu from '../LinkMenu'

import RoundLogo from '../RoundLogo'
import Logo from '../Logo'
import MobileShareBar from '../MobileShareBar'

import { Helmet } from 'react-helmet'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
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

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 12px;
  }
`

const UpperHalfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LowerHalfContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
`

function Header (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const roundLogoWidth = isMobileOrTablet ? '30px' : '50px'
  const logoWidth = isMobileOrTablet ? '231px' : '385px'
  const fontSize = isMobileOrTablet ? '25px' : '18px'
  const { pathname } = props.location
  const { textColor, ocher } = props.theme
  const currentPageColor = ocher

  const { t } = useTranslation()

  return (
    <StyledHeader>
      <Helmet>
        <title>Fridays For Future Japan</title>
        <link id="faviconApple" rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link id="favicon32" rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link id="favicon16" rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      </Helmet>
      <UpperHalfContainer>
        <Link to='/'>
          <StyledLogos>
            <RoundLogo width={roundLogoWidth}/>
            <Logo width={logoWidth}/>
          </StyledLogos>
        </Link>
        {
          isMobileOrTablet
            ? <LinkMenu fontSize={fontSize}>
              {pathname !== '/' && <MobileLinkItem fontSize={fontSize} to='/'>{t('Header.Top')}</MobileLinkItem>}
              {pathname !== '/about-us' && <MobileLinkItem fontSize={fontSize} to='/about-us'>{t('Header.About Us')}</MobileLinkItem>}
              {pathname !== '/faq' && <MobileLinkItem fontSize={fontSize} to='/faq'>FAQ</MobileLinkItem>}
              {pathname !== '/to-organize-form' && <MobileLinkItem fontSize={fontSize} to='/to-organize-form'>{t('Header.Organize')}</MobileLinkItem>}
              {pathname !== '/approach-to-governments' && <MobileLinkItem fontSize={fontSize} to='/approach-to-governments'>{t('Header.APG')}</MobileLinkItem>}
            </LinkMenu>
            : <StyledLinkItems>
              <LinkItem fontSize={fontSize} to='/about-us' color={pathname === '/about-us' ? currentPageColor : textColor}>{t('Header.About Us')}</LinkItem>
              <LinkItem fontSize={fontSize} to='/approach-to-governments' color={pathname === '/approach-to-governments' ? currentPageColor : textColor}>{t('Header.APG')}</LinkItem>
              <LinkItem fontSize={fontSize} to='/to-organize-form' color={pathname === '/to-organize-form' ? currentPageColor : textColor}>{t('Header.Organize')}</LinkItem>
              <LinkItem fontSize={fontSize} to='/faq' color={pathname === '/faq' ? currentPageColor : textColor}>{t('Header.FAQ')}</LinkItem>
            </StyledLinkItems>
        }
      </UpperHalfContainer>
      <LowerHalfContainer>
        {
          isMobileOrTablet && <MobileShareBar />
        }
      </LowerHalfContainer>
    </StyledHeader>
  )
}

export default withTheme(withRouter(Header))
