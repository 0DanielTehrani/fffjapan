import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import media from 'styled-media-query'
import HistoryBoard from '../../HistoryBoard'
import imgWebp from './history-5.webp'
import img from './history-5.png'

const StyledHistory5 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-right: -4.5em;
  margin-top: -12.5em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`
function History5 () {
  const { t } = useTranslation()
  const title = t('About Us.History5_Title')
  const mainText = t('About Us.History5')
  const dateText = '2019.11.29'

  return (
    <StyledHistory5>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='5'
        paddingBottom='15em'
      />
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
    </StyledHistory5>
  )
}

export default History5
