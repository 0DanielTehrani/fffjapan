import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import media from 'styled-media-query'
import HistoryBoard from '../../HistoryBoard'
import imgWebp from './history1.webp'
import img from './history1.png'

const StyledHistory1 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
`

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-top: -18.37em;
  margin-left: -3.13em;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`

function History1 () {
  const { t } = useTranslation()

  const title = t('About Us.History1_Title')
  const mainText = t('About Us.History1')
  const dateText = '2019.2.22'

  return (
    <StyledHistory1>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='1'
        paddingBottom='20.875em'
      />
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
    </StyledHistory1>
  )
}

export default History1
