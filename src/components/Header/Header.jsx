import React from 'react';
import styled, { withTheme } from 'styled-components';
import media from 'styled-media-query';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LinkItem from '../LinkItem';
import MobileLinkItem from './MobileLinkItem';
import LinkMenu from '../LinkMenu';
import ExternalLinkItem from '../ExternalLinkItem';
import MobileExternalLinkItem from './MobileExternalLinkItem';
import LabelText from '../LabelText';
import RoundLogo from '../RoundLogo';
import Logo from '../Logo';
import { DIGITAL_MARCH_URL } from '../../constants';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const StyledLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    margin-left: 30px;
  }
`;

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 12px;
  }
`;

function Header (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const roundLogoWidth = isMobileOrTablet ? '30px' : '50px';
  const logoWidth = isMobileOrTablet ? '231px' : '385px';
  const fontSize = isMobileOrTablet ? '25px' : '18px';
  const { pathname } = props.location;
  const { textColor, ocher } = props.theme;
  const currentPageColor = ocher;

  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Link to='/'>
        <StyledLogos>
          <RoundLogo width={roundLogoWidth}/>
          <Logo width={logoWidth}/>
        </StyledLogos>
      </Link>
      {
        isMobileOrTablet ?
        <LinkMenu fontSize={fontSize}>
          {pathname !== '/' && <MobileLinkItem fontSize={fontSize} to='/'>{t('Header.Top')}</MobileLinkItem>}
          {pathname !== '/about-us' && <MobileLinkItem fontSize={fontSize} to='/about-us'>{t('Header.About Us')}</MobileLinkItem>}
          {pathname !== '/faq' && <MobileLinkItem fontSize={fontSize} to='/faq'>FAQ</MobileLinkItem>}
          {pathname !== '/to-organize-form' && <MobileLinkItem fontSize={fontSize} to='/to-organize-form'>オーガナイズする</MobileLinkItem>}
          {pathname !== '/approach-to-governments' && <MobileLinkItem fontSize={fontSize} to='/approach-to-governments'>行政・政治へのアプローチ</MobileLinkItem>}
          <MobileExternalLinkItem fontSize={fontSize} href={DIGITAL_MARCH_URL} target='_blank'>アクションに参加する</MobileExternalLinkItem>
        </LinkMenu>
        :
        <StyledLinkItems>
          <LinkItem fontSize={fontSize} to='/about-us' color={pathname === '/about-us' ? currentPageColor : textColor}>{t('Header.About Us')}</LinkItem>
          <LinkItem fontSize={fontSize} to='/faq' color={pathname === '/faq' ? currentPageColor : textColor}>{t('Header.FAQ')}</LinkItem>
          <ExternalLinkItem fontSize={fontSize} target='_blank' href={DIGITAL_MARCH_URL}>{t('Header.Join The Action')}</ExternalLinkItem>
        </StyledLinkItems>
      }
    </StyledHeader>
  )
}

export default withTheme(withRouter(Header));
