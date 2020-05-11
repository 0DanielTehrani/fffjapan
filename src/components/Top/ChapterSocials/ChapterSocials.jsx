import React from 'react';
import styled from 'styled-components'
import Text from '../../Text';
import TwitterIcon from '../../SocialIcons/TwitterIcon';
import FacebookIcon from '../../SocialIcons/FacebookIcon';
import InstagramIcon from '../../SocialIcons/InstagramIcon';

const StyledChapterSocials = styled.div`
  text-align: center;
`;

const StyledChapterName = styled(Text)`
  font-size: 1.5em;
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
  const { name, twitter, facebook, instagram } = props;

  return (
    <StyledChapterSocials>
      <StyledChapterName>{name}</StyledChapterName>
      <SocialsContainer>
        <TwitterIcon width='2em'/>
        <FacebookIcon width='2em'/>
        <InstagramIcon width='2em'/>
      </SocialsContainer>
    </StyledChapterSocials>
  )
}

export default ChapterSocials;
