import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import TwitterIcon from '../../SocialIcons/TwitterIcon'
import FacebookIcon from '../../SocialIcons/FacebookIcon'
import YouTubeIcon from '../../SocialIcons/YouTubeIcon'
import { Link } from 'react-router-dom'
import LinkItem from '../../LinkItem'

import RoundLogo from '../../RoundLogo'
import Logo from '../../Logo'
import LangSwitchButton from '../LangSwitchButton'
import Text from '../../Text'
import { YOUTUBE_CHANNEL_LINK } from '../../../constants'

const StyledFooterMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin-top: 3em;
  & * {
    margin-top: 7px;
  }
  padding-bottom: 4em;
`

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 8.4px;
  }
`
const StyledLinkItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.beige};
  width: 100%;
  padding: 1em 0;
`

const SocialsContainerTitle = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  margin-top: 0;
`

const IconsContainer = styled.div`
  margin-top: 10px;
  & * {
    margin-top: 0;
  }
  & :not(:first-child) {
    margin-left: 15px;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`

const LinkWrapper = styled.a``

const LangSwapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

function FooterMobile (props) {
  const roundLogoWidth = '21x'
  const fontSize = '15px'
  const logoWidth = '161.7px'

  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ja')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <StyledFooterMobile>
      <SocialsContainer>
        <SocialsContainerTitle>{t('Footer.FollowFFFJ')}</SocialsContainerTitle>
        <IconsContainer>
          <LinkWrapper href='https://twitter.com/FridaysJapan' target='_blank'><TwitterIcon width='2.5em'/></LinkWrapper>
          <LinkWrapper href='https://www.facebook.com/fridaysforfuture.jp/' target='_blank'><FacebookIcon width='2.5em'/></LinkWrapper>
          <LinkWrapper href={YOUTUBE_CHANNEL_LINK} target='_blank'><YouTubeIcon width='2.5em'/></LinkWrapper>
        </IconsContainer>
      </SocialsContainer>
      <MainContainer>
        <Link to='/'>
          <StyledLogos>
            <RoundLogo width={roundLogoWidth}/>
            <Logo width={logoWidth}/>
          </StyledLogos>
        </Link>
        <StyledLinkItemsColumn>
          <LinkItem fontSize={fontSize} to='/about-us'>{t('Footer.About Us')}</LinkItem>
          <LinkItem fontSize={fontSize} to='/faq'>{t('Footer.FAQ')}</LinkItem>
          <LinkItem fontSize={fontSize} to='/approach-to-governments'>{t('Footer.APG')}</LinkItem>
          <LinkItem fontSize={fontSize} to='/to-organize-form'>{t('Footer.Organize')}</LinkItem>
          <LinkItem fontSize={fontSize} to='/privacy-policy'>{t('Footer.PP')}</LinkItem>
        </StyledLinkItemsColumn>
        <LangSwapContainer>
          <LangSwitchButton currenctLang={i18n.language === 'en' ? '日本語' : 'English'} onClick={toggleLang}/>
        </LangSwapContainer>
      </MainContainer>
    </StyledFooterMobile>
  )
}

export default FooterMobile
