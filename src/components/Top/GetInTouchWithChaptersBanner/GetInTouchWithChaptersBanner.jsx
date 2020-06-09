import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Text from '../../Text'

const StyledGetInTouchWithChaptersBanner = styled(Text)`
  font-size: 2em;
  background-color: ${props => props.theme.beige};
  padding: 0.4em 5em;
  ${media.lessThan('medium')`
    padding: 0.4em 0em;
    width: 100%;
  `}
  display: inline-block;
`

function GetInTouchWithChaptersBanner () {
  const { t } = useTranslation()

  return (
    <StyledGetInTouchWithChaptersBanner>
      {t('Top.GetInTouchWithAChapter')}
    </StyledGetInTouchWithChaptersBanner>
  )
}

export default GetInTouchWithChaptersBanner
