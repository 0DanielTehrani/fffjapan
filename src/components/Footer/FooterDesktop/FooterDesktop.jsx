import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Link } from 'react-router-dom';
import LinkItem from '../../LinkItem';
import ExternalLinkItem from '../../ExternalLinkItem';
import RoundLogo from '../../RoundLogo';
import Logo from '../../Logo';
import LangSwitchButton from '../LangSwitchButton';
import { DIGITAL_MARCH_URL } from '../../../constants';

const StyledFooterDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding-bottom: 2em;
`;

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 8.4px;
  }
`;

const StyledLinkItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLinkItemsRow = styled.div`
  display: flex;
  flex-direction: row;
  & a {
    margin-left: 30px;
  }
`;

const StyledLinkItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTwitterIcon = styled(Twitter)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`;

const StyledFacebookIcon = styled(FacebookSquare)`
  width: ${props => props.width || '25px'};
  color: ${props => props.color || props.theme.textColor};
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 41px;
  & :not(:first-child) {
    margin-left: 15px;
  }
`;

const LinkWrapper = styled.a``;

const LangSwapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

function FooterDesktop (props) {
  const roundLogoWidth = '35px';
  const fontSize = '15px';
  const logoWidth = '269.5px';

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ja');
    } else {
      i18n.changeLanguage('en');
    }
  }

  return (
    <StyledFooterDesktop>
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
        <SocialsContainer>
          <LinkWrapper href='https://twitter.com/FridaysJapan' target='_blank'><StyledTwitterIcon/></LinkWrapper>
          <LinkWrapper href='https://www.facebook.com/fridaysforfuture.jp/' target='_blank'><StyledFacebookIcon/></LinkWrapper>
        </SocialsContainer>
        <LangSwapContainer>
          <LangSwitchButton currenctLang={i18n.language === 'en' ? 'English' : '日本語'} onClick={toggleLang}/>
        </LangSwapContainer>
      </StyledLinkItems>
    </StyledFooterDesktop>
  )
}

export default FooterDesktop;
