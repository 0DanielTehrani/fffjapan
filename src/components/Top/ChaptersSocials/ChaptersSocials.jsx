import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import media from 'styled-media-query';
import GetInTouchWithChaptersBanner from '../GetInTouchWithChaptersBanner';
import Divider from '@material-ui/core/Divider';
import ChapterSocials from '../ChapterSocials'
import ChapterExpansionPanel from './ChapterExpansionPanel';
import chapters from './chapters-socials.js';

const StyledChaptersSocials = styled.div`
  width: 900px;
  ${media.lessThan('large')`
    width: 600px;
  `}
  ${media.lessThan('medium')`
    width: 600px;
  `}
  ${media.lessThan('small')`
    width: 600px;
  `}
`;

const ChapterSocialsTitleContainer = styled.div`
  text-align: center;
  margin-top: 3em;
`;

const ChaptersSocialsContainer = styled.div`
  margin-top: 2em;
`;

const ChapterSocialsContainer = styled.div`
  width: 500px;
`;

const ChaptersContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;



const SocialsContainer = styled.div`
  margin-top: 0.4em;
  & :not(:first-child) {
    margin-left: 1em;
  }
`;

function ChaptersSocials (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <StyledChaptersSocials>
      <ChapterSocialsTitleContainer>
        <GetInTouchWithChaptersBanner />
      </ChapterSocialsTitleContainer>
      <ChaptersSocialsContainer>
        {
          isMobileOrTablet ?
          chapters.map((chapter) =>
            <ChapterExpansionPanel {...chapter} />
          )
          :
          chapters.map((chapter, i) =>
            !(i % 2) &&
            <>
              <Divider />
              <ChaptersContainer>
              <ChapterSocialsContainer><ChapterSocials {...chapter} /></ChapterSocialsContainer>
                {
                  i + 1 < chapters.length
                  && <ChapterSocialsContainer>
                        <ChapterSocials {...chapters[i + 1]} />
                     </ChapterSocialsContainer>
                }
              </ChaptersContainer>
            </>
        )
        }
      </ChaptersSocialsContainer>
    </StyledChaptersSocials>
  )
}

export default ChaptersSocials;
