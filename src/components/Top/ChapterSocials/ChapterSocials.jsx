import React, { useState } from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Collapse from '@material-ui/core/Collapse';
import Text from '../../Text';
import TwitterIconButton from '../../SocialIconButtons/TwitterIconButton';
import FacebookIconButton from '../../SocialIconButtons/FacebookIconButton';
import InstagramIconButton from '../../SocialIconButtons/InstagramIconButton';
import WebsiteIconButton from '../../SocialIconButtons/WebsiteIconButton';

const StyledChapterSocials = styled.div`
  text-align: center;
`;

const StyledChapterName = styled(Text)`
  font-size: 1.3em;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const SocialIconContainer = styled.div`
  display: inline-block;
`;

const SocialsContainer = styled.div`
  display: ${props => props.hidden ? 'none' : 'block'};
  margin-top: 0.4em;
  & :not(:first-child) {
    margin-left: 1em;
  }
`;

function ChapterSocials (props) {
  const { twitter, facebook, instagram, website, onClick, showSocials } = props;
  const { i18n } = useTranslation();
  const name = i18n.language === 'en' ? props.name_en : props.name_ja;

  const twitterURL = `https://twitter.com/${twitter}`;
  const facebookURL = `https://facebook.com/${facebook}`;
  const instagramURL = `https://instagram.com/${instagram}`;

  return (
    <StyledChapterSocials>
      <StyledChapterName onClick={onClick}>{name}</StyledChapterName>
      <Collapse in={showSocials}>
        <SocialsContainer>
          {twitter && <TwitterIconButton width='32px' onClick={() => {window.open(twitterURL)}}/>}
          {facebook && <FacebookIconButton width='32px' onClick={() => {window.open(facebookURL)}}/>}
          {instagram && <InstagramIconButton width='32px' onClick={() => {window.open(instagramURL)}}/>}
          {website && <WebsiteIconButton width='32px' onClick={() => {window.open(website)}}/>}
        </SocialsContainer>
      </Collapse>
    </StyledChapterSocials>
  )
}

export default ChapterSocials;
