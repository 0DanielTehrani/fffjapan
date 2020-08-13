import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopLargeImage from '../components/Top/LargeImage'
import GDABanner from '../components/Top/GDABanner'
import TopSlider from '../components/Top/TopSlider'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'
import Page from '../components/Page'
import MessageBanner from '../components/Top/MessageBanner'
import AboutUsLinkIconButton from '../components/Top/LinkIconButtons/AboutUsLinkIconButton'
import JoinUsLinkIconButton from '../components/Top/LinkIconButtons/JoinUsLinkIconButton'
import OrganizeLinkIconButton from '../components/Top/LinkIconButtons/OrganizeLinkIconButton'
import MobileAboutUsButton from '../components/Top/LinkIconButtons/MobileAboutUsButton'
import MobileJoinUsButton from '../components/Top/LinkIconButtons/MobileJoinUsButton'
import MobileOrganizeButton from '../components/Top/LinkIconButtons/MobileOrganizeButton'
import Video from '../components/Top/Video'
import VideoB from '../components/Top/VideoB'
import VideoTitle from '../components/Top/VideoTitle'
import VideoBTitle from '../components/Top/VideoBTitle'
import TimeToQuestionTitle from '../components/Top/TimeToQuestionTitle'
import ChapersSocials from '../components/Top/ChaptersSocials'
import UpdateNotificationList from '../components/Top/UpdateNotificationList'
import Text from '../components/Text'

const TopLargeImageContainer = styled.div`
  margin-top: 25px;
`

const FooterContainer = styled.div`
`

const MessageBannerContainer = styled.div`
  font-size: 42px;
  display: flex;
  justify-content: center;
  ${media.lessThan('large')`
    font-size: 35px;
  `}
  ${media.lessThan('medium')`
    font-size: 25px;
  `}
  ${media.lessThan('small')`
    font-size: 11px;
  `}
`

const LinkIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  margin-top: 1.97em;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 1.59em;
  }
  ${media.lessThan('large')`
    font-size: 18px;
  `}
  ${media.lessThan('medium')`
    font-size: 13px;
  `}
  ${media.lessThan('small')`
    font-size: 6px;
  `}
`

const MobileLinkIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  & >:not(:first-child) {
    margin-top: 2em;
  }
`

const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
`

const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 7em;
  ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 4em;
  `}
`

const VideoContainer = styled.div`
  width: 100%;
`

const ChapersSocialsContainer = styled.div`
  width: 100%;
  margin-top: 7em;
  ${media.lessThan('large')`
    margin-top: 4em;
  `};
  display: flex;
  justify-content: center;
`

const MiraiQContainer = styled.div`
  margin: 7em 0em;
  text-align: center;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
`

const TimeToQuestionTitleContainer = styled.div`
  margin: 7em 0em;
  text-align: center;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
  margin-bottom: 2em;
`

const LatestUpdateTitleContainer = styled.div`
  margin-bottom: 3em;
  text-align: center;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
  margin-bottom: 2em;
`

const LatestUpdateTitle = styled(Text)`
  font-size: 2em;
`

const UpdateNotificationListContainer = styled.div`
  margin: 7em auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.beige};
  padding: 3em;
  ${media.lessThan('medium')`
    padding: 3em 1em;
  `}
`

function Top () {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  return (
    <Page>
      <Header />
      <TopLargeImageContainer>
        <TopSlider />
      </TopLargeImageContainer>
      <MessageBannerContainer>
        <MessageBanner />
      </MessageBannerContainer>
      <UpdateNotificationListContainer>
        <LatestUpdateTitleContainer>
          <LatestUpdateTitle>更新情報</LatestUpdateTitle>
        </LatestUpdateTitleContainer>
        <UpdateNotificationList />
      </UpdateNotificationListContainer>
      {
        isMobile
          ? <MobileLinkIconButtonsContainer>
            <MobileAboutUsButton />
            <MobileJoinUsButton />
            <MobileOrganizeButton />
          </MobileLinkIconButtonsContainer>
          : <LinkIconButtonsContainer>
            <AboutUsLinkIconButton />
            <JoinUsLinkIconButton />
            <OrganizeLinkIconButton />
          </LinkIconButtonsContainer>
      }
      <ChapersSocialsContainer>
        <ChapersSocials />
      </ChapersSocialsContainer>

      <VideosContainer>
        <VideoContainer>
          <VideoTitleContainer>
            <VideoTitle />
          </VideoTitleContainer>
          <Video />
        </VideoContainer>
        <VideoContainer>
          <VideoTitleContainer>
            <VideoBTitle />
          </VideoTitleContainer>
          <VideoB />
        </VideoContainer>
      </VideosContainer>
      <MiraiQContainer>
        <TimeToQuestionTitleContainer>
          <TimeToQuestionTitle />
        </TimeToQuestionTitleContainer>
        <iframe
          title="time-to-question"
          src="https://www.time-to-question.com/ja/questions/?partner=fridays-for-future-japan"
          width="100%"
          height="700"
          frameBorder="0"
          style={{ height: '80vh' }}></iframe>
      </MiraiQContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default Top
