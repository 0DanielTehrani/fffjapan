import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import { Share } from '@styled-icons/boxicons-solid/Share';
import Text from '../Text';
import { FACEBOOK_SHARE_URL } from '../../constants';
import { constructTwitterShareURL } from '../utils';

const StyledMobileShareBar = styled.div`
  position: fixed;
  bottom: 1em;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
`;

const TwitterButtonContainer = styled.div`
`;

const FacebookButtonContainer = styled.div`
`;

const StyledText = styled(Text)`
  display: inline-block;
  font-size: 1em;
`;

function MobileShareBar (props) {
  const { t } = useTranslation();
  const { pathname } = props.location;
  const twitterShareURL = constructTwitterShareURL(t(`Sidebar.ShareText.${pathname}`), window.location.href);

  return (
    <StyledMobileShareBar>
      <StyledText>{t('Sidebar.share')}</StyledText>
      <TwitterButtonContainer>
        <TwitterShareButton
          width='3.2em'
          onClick={() => {window.open(twitterShareURL)}} />
      </TwitterButtonContainer>
      <FacebookButtonContainer>
        <FacebookShareButton
          width='3.2em'
          onClick={() => {window.open(FACEBOOK_SHARE_URL)}}/>
      </FacebookButtonContainer>
    </StyledMobileShareBar>
  )
}

export default withRouter(MobileShareBar);
