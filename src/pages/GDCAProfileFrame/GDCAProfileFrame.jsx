import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import GDCAPageHeading from '../../components/GDCA/GDCAPageHeading'
import profileFrame from './profile-frame.png'

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`


const StyledGDCAProfileFrame = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 14px;
  `}
`


function GDCAProfileFrame (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const joinUsWidth = isMobileOrTablet ? '330px' : '430px'
  
  return (
    <Page maxWidth='1120px'>
      <GDAHeader />
      <StyledGDCAProfileFrame>
        <GDCAPageHeading
          textImgSrc={profileFrame}
          title='プロフィールフレーム設定'
          color={props.theme.green}
        />
      <FooterContainer><Footer /></FooterContainer>
      </StyledGDCAProfileFrame>
    </Page>
  )
}

export default withTheme(GDCAProfileFrame)
