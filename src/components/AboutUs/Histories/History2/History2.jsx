import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import media from 'styled-media-query'
import HistoryBoard from '../../HistoryBoard'
import imgWebp from './history2.webp'
import img from './history2.png'

const StyledHistory2 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
`

const StyledImage = styled.img`
  width: 31.25em;
  height: auto;
  margin-bottom: -18.13em;
  margin-left: -1.875em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`

function History2 () {
  const { t } = useTranslation()
  const title = t('About Us.History2_Title')
  const mainText = t('About Us.History2')
  const dateText = '2019.3.15'

  return (
    <StyledHistory2>
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='2'
        paddingTop='20.625em'
        alignDateTextBottom
      />
    </StyledHistory2>
  )
}

export default History2
