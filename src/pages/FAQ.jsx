import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import media from 'styled-media-query';
import { ORGANIZE_GOOGLE_FORM_URL } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import QA from '../components/FAQ/QA';
import QA2 from '../components/FAQ/QA2';
import FloatingFAQImage from '../components/FAQ/FloatingFAQImage';
import Text from '../components/FAQ/Text';

const StyledFAQ = styled.div`
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
`;

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`;

const FooterContainer = styled.div`
  margin-top: 2.5em;
`;

const QARow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & >:nth-child(2) {
    margin-top: 12.31em;
  }
`;

const QAContainer = styled.div`
  max-width: 47.3%;
  ${media.lessThan('large')`
    max-width: 100%;
    margin-top: 3em;
  `}
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: -6.93em;
  ${media.lessThan('large')`
    margin-bottom: 0;
    text-align: center;
  `};
`;

const TextWrapper = styled.div`
  display: inline-block;
  width: 30em;
  text-align: left;
  ${media.lessThan('large')`
    width: auto;
  `};
`;

function FAQ () {
  const isLargeScreen = useMediaQuery({ query: '(max-width: 1170px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  const containerWidth =  isTablet ? '700px' :
    isLargeScreen ? '980px' : '1240px';

  const { t } = useTranslation();

  const qas = [
    {
      question: t('FAQ.Q1'),
      answer: t('FAQ.A1'),
      color: '#0032C8',
      avatarType: 1
    },
    {
      question: t('FAQ.Q2'),
      answer: t('FAQ.A2'),
      color: '#C80032',
      avatarType: 2
    },
    {
      question: t('FAQ.Q3'),
      answer: <span>
        {t('FAQ.A3_1')}
        <a href={ORGANIZE_GOOGLE_FORM_URL} target='_blank'><u>{t('FAQ.link1')}</u></a>
        {t('FAQ.A3_2')}
        <a href='to-organize-form'><u>{t('FAQ.link2')}</u></a>
        {t('FAQ.A3_3')}
        </span>,
      color: '#007850',
      avatarType: 3
    },
    {
      question: t('FAQ.Q4'),
      answer: t('FAQ.A4'),
      avatarType: 4,
      color: '#C80032'
    }
  ]

  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><Header /></HeaderContainer>
        <StyledFAQ>
          <TextContainer><TextWrapper><Text>{t('FAQ.ANSWER FAQ Row1')}<br />{t('FAQ.ANSWER FAQ Row2')}</Text></TextWrapper></TextContainer>
          {!isMobile && <FloatingFAQImage containerWidth={containerWidth} top='7em'/>}
          {
            qas.map((qa, i) =>
              isLargeScreen ?
              <QAContainer><QA2 {...qa} /></QAContainer>
              : !(i % 2) &&
              <QARow key={i}>
                <QAContainer><QA {...qa} /></QAContainer>
                {
                  qas.length > i + 1 &&
                  <QAContainer><QA {...qas[i + 1]} /></QAContainer>
                }
              </QARow>
            )
          }
        </StyledFAQ>
      <FooterContainer><Footer /></FooterContainer>
    </Page>
  );
}

export default FAQ;
