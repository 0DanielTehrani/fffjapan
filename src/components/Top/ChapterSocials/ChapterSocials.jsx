import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Text from '../../Text';
import TwitterIconButton from '../../SocialIconButtons/TwitterIconButton';
import FacebookIconButton from '../../SocialIconButtons/FacebookIconButton';
import InstagramIconButton from '../../SocialIconButtons/InstagramIconButton';

const StyledChapterSocials = styled.div`
  text-align: center;
`;

const StyledChapterName = styled(Text)`
  font-size: 1.3em;
`;

const SocialIconContainer = styled.div`
  display: inline-block;
`;

const SocialsContainer = styled.div`
  margin-top: 0.4em;
  & :not(:first-child) {
    margin-left: 1em;
  }
`;

function ChapterSocials (props) {
  const { twitter, facebook, instagram } = props;
  const { i18n } = useTranslation();
  const name = i18n.language === 'en' ? props.name_en : props.name_ja;

  return (
    <StyledChapterSocials>
      <StyledChapterName>{name}</StyledChapterName>
      <SocialsContainer>
        {twitter && <TwitterIconButton width='32px'/>}
        {facebook && <FacebookIconButton width='32px'/>}
        {instagram && <InstagramIconButton width='32px'/>}
      </SocialsContainer>
    </StyledChapterSocials>
  )
}

export default ChapterSocials;
