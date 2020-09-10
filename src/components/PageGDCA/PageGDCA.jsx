import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import media from 'styled-media-query'
import CookieConsentBanner from '../CookieConsentBanner'
import MobileShareBar from '../MobileShareBar'
import Sidebar from '../Sidebar'
import GDCAFooter from '../GDCA/GDCAFooter'
import GDAHeader from '../GDAHeader'

const StyledPageGDCA = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${props => props.maxWidth || '1200px'};
  padding-top: 30px;
  font-size: 16px;
  ${media.lessThan('large')`
    max-width: 950px;
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    max-width: 700px;
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    max-width: 330px;
    font-size: 14px;
  `}
`

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

function PageGDCA (props) {
  const isBelowThreshold = useMediaQuery({ query: '(max-width: 1425px)' })
  return (
    <StyledPageGDCA {...props}>
      <HeaderContainer><GDAHeader /></HeaderContainer>
        {props.children}
      <GDCAFooter />
      <CookieConsentBanner />
      {isBelowThreshold ? <MobileShareBar /> : <Sidebar />}
    </StyledPageGDCA>
  )
}

export default PageGDCA
