import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import TwitterIcon from '../../SocialIcons/TwitterIcon'
import FacebookIcon from '../../SocialIcons/FacebookIcon'
import YouTubeIcon from '../../SocialIcons/YouTubeIcon'
import InstagramIcon from '../../SocialIcons/InstagramIcon'
import NoteIcon from '../../SocialIcons/NoteIcon'
import { Link } from 'react-router-dom'
import LinkItem from '../../LinkItem'
import RoundLogo from '../../RoundLogo'
import Logo from '../../Logo'
import LangSwitchButton from '../LangSwitchButton'
import Text from '../../Text'
import { YOUTUBE_CHANNEL_LINK, NOTE_ACCOUNT_LINK, INSTAGRAM_ACCOUNT_LINK } from '../../../constants'

const StyledFooterDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding-bottom: 2em;
  ${media.lessThan('1425px')`
    padding-bottom: 4em;
  `};
`

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 8.4px;
  }
`

const StyledLinkItems = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLinkItemsRow = styled.div`
  display: flex;
  flex-direction: row;
  & a {
    margin-left: 30px;
  }
`

const StyledLinkItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3em;
  margin-bottom: 3em;
  background-color: ${props => props.theme.beige};
  padding: 3.125em 5em;
  & * {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
`

const SocialsContainerTitle = styled(Text)`
  font-size: 1.8em;
  font-weight: bold;
`

const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LinkWrapper = styled.a``

const LangSwapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`

function FooterDesktop () {
  const roundLogoWidth = '35px'
  const fontSize = '15px'
  const logoWidth = '269.5px'

  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ja')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <StyledFooterDesktop>
      <SocialsContainer>
        <SocialsContainerTitle>{t('Footer.FollowFFFJ')}</SocialsContainerTitle>
        <LinkWrapper href='https://twitter.com/FridaysJapan' target='_blank'><TwitterIcon width='3.5em'/></LinkWrapper>
        <LinkWrapper href='https://www.facebook.com/fridaysforfuture.jp/' target='_blank'><FacebookIcon width='3.5em'/></LinkWrapper>
        <LinkWrapper href={YOUTUBE_CHANNEL_LINK} target='_blank'><YouTubeIcon width='3.5em'/></LinkWrapper>
        <LinkWrapper href={INSTAGRAM_ACCOUNT_LINK} target='_blank'><InstagramIcon width='3.5em'/></LinkWrapper>
        <LinkWrapper href={NOTE_ACCOUNT_LINK} target='_blank'><NoteIcon width='2.5em'/></LinkWrapper>
      </SocialsContainer>
      <MainContainer>
        <Link to='/'>
          <StyledLogos>
            <RoundLogo width={roundLogoWidth}/>
            <Logo width={logoWidth}/>
          </StyledLogos>
        </Link>
        <StyledLinkItems>
          <StyledLinkItemsRow>
            <StyledLinkItemsColumn>
              <LinkItem fontSize={fontSize} to='/about-us'>{t('Footer.About Us')}</LinkItem>
              <LinkItem fontSize={fontSize} to='/faq'>{t('Footer.FAQ')}</LinkItem>
            </StyledLinkItemsColumn>
            <StyledLinkItemsColumn>
              <LinkItem fontSize={fontSize} to='/approach-to-governments'>{t('Footer.APG')}</LinkItem>
              <LinkItem fontSize={fontSize} to='/to-organize-form'>{t('Footer.Organize')}</LinkItem>
            </StyledLinkItemsColumn>
            <StyledLinkItemsColumn>
              <LinkItem fontSize={fontSize} to='/privacy-policy'>{t('Footer.PP')}</LinkItem>
            </StyledLinkItemsColumn>
          </StyledLinkItemsRow>
          <LangSwapContainer>
            <LangSwitchButton currenctLang={i18n.language === 'en' ? '日本語' : 'English'} onClick={toggleLang}/>
          </LangSwapContainer>
        </StyledLinkItems>
      </MainContainer>
    </StyledFooterDesktop>
  )
}

export default FooterDesktop
