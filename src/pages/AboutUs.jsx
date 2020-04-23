import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import WhatIsFFFJapan from '../components/AboutUs/WhatIsFFFJapan';
import History1 from '../components/AboutUs/Histories/History1';
import History2 from '../components/AboutUs/Histories/History2';
import History3 from '../components/AboutUs/Histories/History3';
import History4 from '../components/AboutUs/Histories/History4';
import History5 from '../components/AboutUs/Histories/History5';
import History6 from '../components/AboutUs/Histories/History6';
import ApproachToGovernmentsBoard from '../components/AboutUs/ApproachToGovernmentsBoard';
import FloatingAboutUsImage from '../components/AboutUs/FloatingAboutUsImage';
import ArrowImage from '../components/RandomImages/Arrow';

const StyledAboutUs = styled.div`
    font-size: 16px;
    ${media.lessThan('large')`
      font-size: 16px;
    `}
    ${media.lessThan('medium')`
      font-size: 14px;
    `}
    ${media.lessThan('small')`
      font-size: 13px;
    `}
    margin-top: 3.125em;
`;

const HeaderContainer = styled.div`
`;

const WhatIsFFFJapanContainer = styled.div`
  position: relative;
`;

const History2Container = styled.div`
  position: relative;
`;

const ArrowImageContainer1 = styled.div`
  position: absolute;
  left: 75%;
  ${media.lessThan('large')`
    top: 103%;
    left: calc(50% - 20px);
  `};
`;

const ArrowImageContainer2 = styled.div`
  position: absolute;
  left: 50%;
  top: 110%;
`;

const History1_2Container = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5em;
  & >:nth-child(1) {
    margin-top: 10em;
  };
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    & >:nth-child(1) {
      margin-top: 3em;
    };
    & > * {
      margin-top: 3em;
    };
  `};
`;

const History3_4Container = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & >:nth-child(1) {
    margin-top: 10em;
  };
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    & >:nth-child(1) {
      margin-top: 10em;
    };
    & > * {
      margin-top: 3em;
    };
  `};
`;

const History5_6Container = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -5em;
  & >:nth-child(1) {
    margin-top: 10em;
  };
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    & >:nth-child(1) {
      margin-top: 3em;
    };
    & >:nth-child(2) {
      margin-top: 10em;
    };
  `};
`;

const ApproachToGovernmentsBoardContainer = styled.div`
  margin-top: 5em;
`;

const StyledFooterContainer = styled.div`
  margin-top: 5em;
`;

function AboutUs () {
  const isLargeScreen = useMediaQuery({ query: '(max-width: 1170px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  const containerWidth =  isTablet ? '700px' :
    isLargeScreen ? '980px' : '1250px';

  return (
    <Page maxWidth='1120px'>
      <Header />
        <StyledAboutUs>
          {!isMobile && <FloatingAboutUsImage containerWidth={containerWidth} top='7em'/>}
          <WhatIsFFFJapanContainer>
            <WhatIsFFFJapan />
            <ArrowImageContainer1><ArrowImage /></ArrowImageContainer1>
          </WhatIsFFFJapanContainer>
          <History1_2Container>
            <History2Container>
              <History2 />
              {useMediaQuery({ query: '(min-width: 1280px)' }) && <ArrowImageContainer2><ArrowImage /></ArrowImageContainer2>}
            </History2Container>
            <History1 />
          </History1_2Container>
          <History3_4Container>
            <History4 />
            <History3 />
          </History3_4Container>
          <History5_6Container>
            <History6 />
            <History5 />
          </History5_6Container>
          <ApproachToGovernmentsBoardContainer>
            <ApproachToGovernmentsBoard />
          </ApproachToGovernmentsBoardContainer>
        </StyledAboutUs>
      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </Page>
  );
}

export default AboutUs;
