import React from 'react'
import styled from 'styled-components';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import { Share } from '@styled-icons/boxicons-solid/Share';

const StyledMobileShareBar = styled.div`
  position: fixed;
  bottom: 1em;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TwitterButtonContainer = styled.div`
`;

const FacebookButtonContainer = styled.div`
`;

const StyledShare = styled(Share)`
  color: ${props => props.theme.green};
  width: 2.5em;
  padding: 1px 7px 2px;
`;


function MobileShareBar () {
  return (
    <StyledMobileShareBar>
      <StyledShare />
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
