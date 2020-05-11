import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TwitterIcon from '../../SocialIcons/TwitterIcon';
import FacebookIcon from '../../SocialIcons/FacebookIcon';
import { Link } from 'react-router-dom';
import LinkItem from '../../LinkItem';
import ExternalLinkItem from '../../ExternalLinkItem';
import RoundLogo from '../../RoundLogo';
import Logo from '../../Logo';
import LangSwitchButton from '../LangSwitchButton';
import { DIGITAL_MARCH_URL } from '../../../constants';

const StyledFooterMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  & * {
    margin-top: 7px;
  }
  padding-bottom: 2em;
`;

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 8.4px;
  }
`;

const StyledLinkItemsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    margin-left: 30px;
  }
  & svg {
    margin-left: 41px;
  }
`;

const StyledLinkItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  & :not(:first-child) {
    margin-left: 15px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const LinkWrapper = styled.a``;

const LangSwapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

function FooterMobile (props) {
  const roundLogoWidth = '21x';
  const fontSize = '15px';
  const logoWidth = '161.7px';

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ja');
    } else {
      i18n.changeLanguage('en');
    }
  }

  return (
    <StyledFooterMobile>
      <SocialsContainer>
        <LinkWrapper href='https://twitter.com/FridaysJapan' target='_blank'><TwitterIcon width='2.5em'/></LinkWrapper>
        <LinkWrapper href='https://www.facebook.com/fridaysforfuture.jp/' target='_blank'><FacebookIcon width='2.5em'/></LinkWrapper>
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
          <LangSwitchButton currenctLang={i18n.language === 'en' ? 'English' : '日本語'} onClick={toggleLang}/>
        </LangSwapContainer>
      </MainContainer>
    </StyledFooterMobile>
  )
}

export default FooterMobile;
