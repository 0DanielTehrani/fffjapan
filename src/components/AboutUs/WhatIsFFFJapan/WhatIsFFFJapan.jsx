import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import imgWebp from './what-is-fffjapan.webp'
import img from './what-is-fffjapan.png'
import media from 'styled-media-query'

const StyledWhatIsFFFJapan = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
`

const StyledImage = styled.img`
  width: 37.5em;
  margin-right: 1.81em;
  margin-top: 3.125em;
  ${media.lessThan('large')`
    margin-right: 0;
  `};
  ${media.lessThan('small')`
    width: 90vw;
  `};
`

const StyledTextBoard = styled.div`
  font-size: 1em;
  max-width: 26.875em;
  padding: 3.75em 3.125em 3.625em 3.125em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.beige};
  ${media.lessThan('large')`
    margin-top: 3em;
  `};
`

const StyledTextBoardTitle = styled.div`
  font-size: 1.5em;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
`

const StyledTextBoardBody = styled.div`
  font-size: 1em;
  margin-top: 2.68em;
  line-height: 1.625em;
  font-family: ${props => props.theme.fontFamily};
`

function WhatIsFFFJapan () {
  const { t } = useTranslation()

  return (
    <StyledWhatIsFFFJapan>
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
      <StyledTextBoard>
        <StyledTextBoardTitle>{t('About Us.What Is FFFJapan? Title')}</StyledTextBoardTitle>
        <StyledTextBoardBody>
          {t('About Us.What Is FFFJapan?')}
        </StyledTextBoardBody>
      </StyledTextBoard>
    </StyledWhatIsFFFJapan>
  )
}

export default WhatIsFFFJapan
