import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopLargeImage from '../components/Top/LargeImage'
import styled from 'styled-components';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import Page from '../components/Page';
import MessageBanner from '../components/Top/MessageBanner';
import AboutUsLinkIconButton from '../components/Top/LinkIconButtons/AboutUsLinkIconButton';
import OrganizeLinkIconButton from '../components/Top/LinkIconButtons/OrganizeLinkIconButton';
import MobileAboutUsButton from '../components/Top/LinkIconButtons/MobileAboutUsButton'
import MobileJoinUsButton from '../components/Top/LinkIconButtons/MobileJoinUsButton'
import MobileOrganizeButton from '../components/Top/LinkIconButtons/MobileOrganizeButton'
import Video from '../components/Top/Video';

const TopLargeImageContainer = styled.div`
  margin-top: 40px;
`;

const FooterContainer = styled.div`
  margin-top: 84px;
  ${media.lessThan('small')`
    margin-top: 30px;
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
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  margin-top: 1.97em;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 7em;
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

const VideoContainer = styled.div`
  width: 100%;
  margin-top: 2em;
`;

function Top () {
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
      <VideoContainer>
        <Video />
      </VideoContainer>
      {
        isMobile ?
          <MobileLinkIconButtonsContainer>
            <MobileAboutUsButton />
            <MobileOrganizeButton />
          </MobileLinkIconButtonsContainer>
          : <LinkIconButtonsContainer>
            <AboutUsLinkIconButton />
            <OrganizeLinkIconButton />
          </LinkIconButtonsContainer>
      }
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default Top;
