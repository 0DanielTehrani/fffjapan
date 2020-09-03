import React from 'react'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'

import { withRouter, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

import LinkItem from '../LinkItem'
import MobileLinkItem from '../Header/MobileLinkItem'
import LinkMenu from '../LinkMenu'

import RoundLogo from '../RoundLogo'
import Logo from '../Logo'
import MobileShareBar from '../MobileShareBar'

import Text from '../Text'

import { Helmet } from 'react-helmet'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 6em;
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
const GDATitleLink = styled(Link)
`
  text-decoration: none;
`

const GDATitle = styled(Text)
` 
  color: ${props => props.theme.blue};
  font-size: 1.3em;
  ${
    media.greaterThan('medium')
    `
      font-size: 2.4em;
    `
  }
  text-decoration: none;
  font-weight: bold;
`

function Header (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const roundLogoWidth = isMobileOrTablet ? '30px' : '50px'
  const logoWidth = isMobileOrTablet ? '200px' : '200px'
  const fontSize = isMobileOrTablet ? '25px' : '18px'
  const { pathname } = props.location
  const { textColor, ocher } = props.theme
  const currentPageColor = ocher

  const { t } = useTranslation()
  
  

  return (
    <StyledHeader>
      <Helmet>
          <title>世界気候アクション0925</title>
          <link id="faviconApple" rel="apple-touch-icon" sizes="180x180" href="gda/apple-touch-icon.png" />
          <link id="favicon32" rel="icon" type="image/png" sizes="32x32" href="gda/favicon-32x32.png" />
          <link id="favicon16" rel="icon" type="image/png" sizes="16x16" href="gda/favicon-16x16.png" />
      </Helmet>
      <UpperHalfContainer>
          <StyledLogos>
            <GDATitle>世界気候アクション0925</GDATitle>
          </StyledLogos>
        <Link to='/'>
          <RoundLogo width={roundLogoWidth}/>
        </Link>
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
