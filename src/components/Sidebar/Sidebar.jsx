import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import { Share } from '@styled-icons/boxicons-solid/Share';
import Text from '../Text';

const StyledSidebar = styled.div`
  position: fixed;
  top: 45%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-left: 4em;
`;

const TwitterButtonContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const FacebookButtonContainer = styled.div`
  margin-top: 1em;
`;

const StyledText = styled(Text)`
  display: inline-block;
  margin-bottom: 1em;
  font-size: 1em;
`;

function Sidebar () {
  const { t } = useTranslation();

  return (
    <StyledSidebar>
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
    </StyledSidebar>
  )
}

export default Sidebar;
