import React from 'react'
import styled from 'styled-components';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import { Share } from '@styled-icons/boxicons-solid/Share';

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

const StyledShare = styled(Share)`
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  width: 2.5em;
`;


function Sidebar () {
  return (
    <StyledSidebar>
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
    </StyledSidebar>
  )
}

export default Sidebar;
