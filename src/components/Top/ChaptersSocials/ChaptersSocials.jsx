import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import ChapterSocials from '../ChapterSocials'
import ChapterExpansionPanel from './ChapterExpansionPanel'
import MobileExpansionPanel from './MobileExpansionPanel'
import GetInTouchWithChaptersBanner from '../GetInTouchWithChaptersBanner'
import chapters from './chapters-socials.js'

const StyledChaptersSocials = styled.div`
  width: 93%;
  background-color: ${props => props.theme.beige};
  text-align: center;
`

const StyledDivider = styled.hr`
  border-width: 0.1px;
  border-style: inset;
  width: 85%;
`

const StyledMobileDivider = styled.hr`
  border-width: 0.1px;
  border-style: inset;
  width: 60%;
`

const ChaptersSocialsContainer = styled.div`
  padding-bottom: 3em;
`

const GetInTouchWithChaptersBannerContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3em;
  margin-bottom: 2em;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
`

const ChapterSocialsContainer = styled.div`
  width: 400px;
`

const ChaptersContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
  justify-content: center;
  margin-top: 0.5em 0;
  padding: 0 4em;
`

const SocialsContainer = styled.div`
  margin-top: 0.4em;
  & :not(:first-child) {
    margin-left: 1em;
  }
`

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter (ref, onClickOutside) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

function ChaptersSocials (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  const [expandedChapter, setExpandedChapter] = useState(null)

  const toggleExpandedChapter = (chapterIndex) => {
    expandedChapter === chapterIndex ? setExpandedChapter(null) : setExpandedChapter(chapterIndex)
  }

  const closeExpandedChapter = () => {
    setExpandedChapter(null)
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, closeExpandedChapter)

  return (
    <StyledChaptersSocials ref={wrapperRef}>
      <GetInTouchWithChaptersBannerContainer>
        <GetInTouchWithChaptersBanner />
      </GetInTouchWithChaptersBannerContainer>
      <ChaptersSocialsContainer>
        {
          isMobileOrTablet
            ? chapters.map((chapter, i) =>
              <>
                <StyledMobileDivider color={props.theme.green}/>
                <MobileExpansionPanel
                  {...chapter}
                  key={i}
                  onClick={toggleExpandedChapter.bind(this, i)}
                  showSocials={expandedChapter === i} />
              </>
            )
            : chapters.map((chapter, i) =>
              !(i % 3) &&
            <>
              <StyledDivider color={props.theme.green}/>
              <ChaptersContainer>
                <ChapterSocialsContainer>
                  <ChapterSocials {...chapter} key={i} onClick={toggleExpandedChapter.bind(this, i)} showSocials={expandedChapter === i}/>
                </ChapterSocialsContainer>
                <ChapterSocialsContainer>
                  {i + 1 < chapters.length &&
                  <ChapterSocials {...chapters[i + 1]} key={i + 1} onClick={toggleExpandedChapter.bind(this, i + 1)} showSocials={expandedChapter === i + 1}/>}
                </ChapterSocialsContainer>
                <ChapterSocialsContainer>
                  {i + 2 < chapters.length &&
                  <ChapterSocials {...chapters[i + 2]} key={i + 2} onClick={toggleExpandedChapter.bind(this, i + 2)} showSocials={expandedChapter === i + 2}/>}
                </ChapterSocialsContainer>
              </ChaptersContainer>
            </>
            )
        }
        { isMobileOrTablet ? <StyledMobileDivider color={props.theme.green}/> : <StyledDivider color={props.theme.green}/>}
      </ChaptersSocialsContainer>
    </StyledChaptersSocials>
  )
}

export default withTheme(ChaptersSocials)
