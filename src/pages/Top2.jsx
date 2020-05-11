import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer2';
import TopLargeImage from '../components/Top2/LargeImage'
import styled from 'styled-components';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import Page from '../components/Page';
import MessageBanner from '../components/Top2/MessageBanner';
import AboutUsLinkIconButton from '../components/Top2/LinkIconButtons/AboutUsLinkIconButton';
import JoinUsLinkIconButton from '../components/Top2/LinkIconButtons/JoinUsLinkIconButton';
import OrganizeLinkIconButton from '../components/Top2/LinkIconButtons/OrganizeLinkIconButton';
import MobileAboutUsButton from '../components/Top2/LinkIconButtons/MobileAboutUsButton'
import MobileJoinUsButton from '../components/Top2/LinkIconButtons/MobileJoinUsButton'
import MobileOrganizeButton from '../components/Top2/LinkIconButtons/MobileOrganizeButton'
import Video from '../components/Top2/Video';
import VideoTitle from '../components/Top2/VideoTitle';
import ChapersSocials from '../components/Top2/ChaptersSocials';
import ChapterExpansionPanel from '../components/Top2/ChaptersSocials/ChapterExpansionPanel';
import GetInTouchWithChaptersBanner from '../components/Top2/GetInTouchWithChaptersBanner';

const TopLargeImageContainer = styled.div`
  margin-top: 40px;
`;

const FooterContainer = styled.div`
  margin-top: 20px;
  ${media.lessThan('small')`
    margin-top: 15px;
  `}
`;

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
`;

const LinkIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  margin-top: 1.97em;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  & > :not(:first-child) {
    margin-top: 1em;
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
`;

const MobileLinkIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  & >:not(:first-child) {
    margin-top: 2em;
  }
`;

const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4em;
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
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const GetInTouchWithChaptersBannerContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2em;
  font-size: 32px;
  ${media.lessThan('large')`
    font-size: 28px;
  `}
  ${media.lessThan('medium')`
    font-size: 24px;
  `}
  ${media.lessThan('small')`
    font-size: 24px;
  `}
`;

const ChapersSocialsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Top2 () {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  return (
    <Page>
      <Header />
      <TopLargeImageContainer>
        <TopLargeImage />
      </TopLargeImageContainer>
      <MessageBannerContainer>
        <MessageBanner />
      </MessageBannerContainer>
      {
        isMobile ?
          <MobileLinkIconButtonsContainer>
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
      <GetInTouchWithChaptersBannerContainer>
        <GetInTouchWithChaptersBanner />
      </GetInTouchWithChaptersBannerContainer>
      <ChapersSocialsContainer>
        <ChapersSocials />
      </ChapersSocialsContainer>
      <VideoTitleContainer>
        <VideoTitle />
      </VideoTitleContainer>
      <VideoContainer>
        <Video />
      </VideoContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default Top2;
