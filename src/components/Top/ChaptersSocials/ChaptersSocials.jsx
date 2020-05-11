import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import media from 'styled-media-query';
import Divider from '@material-ui/core/Divider';
import ChapterSocials from '../ChapterSocials'
import ChapterExpansionPanel from './ChapterExpansionPanel';
import chapters from './chapters-socials.js';


const StyledChaptersSocials = styled.div`
  width: 1000px;
  ${media.lessThan('large')`
    width: 700px;
  `}
`;

const ChaptersSocialsContainer = styled.div`
  margin-top: 2em;
`;

const ChapterSocialsContainer = styled.div`
  width: 400px;
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
      <ChaptersSocialsContainer>
        {
          isMobileOrTablet ?
          chapters.map((chapter) =>
            <ChapterExpansionPanel {...chapter} />
          )
          :
          chapters.map((chapter, i) =>
            !(i % 3) &&
            <>
              <Divider />
              <ChaptersContainer>
              <ChapterSocialsContainer><ChapterSocials {...chapter} /></ChapterSocialsContainer>
                {
                <>
                  <ChapterSocialsContainer>
                    {i + 1 < chapters.length && <ChapterSocials {...chapters[i + 1]} />}
                  </ChapterSocialsContainer>
                  <ChapterSocialsContainer>
                    {i + 2 < chapters.length && <ChapterSocials {...chapters[i + 2]} />}
                  </ChapterSocialsContainer>
                </>
                }
              </ChaptersContainer>
            </>
        )
        }
        <Divider />
      </ChaptersSocialsContainer>
    </StyledChaptersSocials>
  )
}

export default ChaptersSocials;
