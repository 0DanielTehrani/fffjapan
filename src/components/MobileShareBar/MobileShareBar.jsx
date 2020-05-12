import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import { Share } from '@styled-icons/boxicons-solid/Share';
import Text from '../Text';

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

function MobileShareBar () {
  const { t } = useTranslation();

  return (
    <StyledMobileShareBar>
      <StyledText>{t('Sidebar.share')}</StyledText>
      <TwitterButtonContainer>
        <TwitterShareButton
          width='3.2em'
          onClick={() => {window.open(`http://twitter.com/share?url=${window.location.href}`)}} />
      </TwitterButtonContainer>
      <FacebookButtonContainer>
        <FacebookShareButton
          width='3.2em'
          onClick={() => {window.open(`https://www.facebook.com/share.php?u=${window.location.href}`)}}/>
      </FacebookButtonContainer>
    </StyledMobileShareBar>
  )
}

export default MobileShareBar;
