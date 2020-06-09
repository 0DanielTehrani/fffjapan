import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import holdingBannerImage1Webp from './holding-banner-1.webp'
import holdingBannerImage1 from './holding-banner-1.png'
import holdingBannerImage2Webp from './holding-banner-2.webp'
import holdingBannerImage2 from './holding-banner-2.png'

const StyledMessageBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const StyledMessage = styled.span`
  display: inline-block;
  text-align: center;
  border: solid 0.17em;
  border-color: ${props => props.theme.textColor};
  color: ${props => props.theme.textColor || props.color};
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  padding: 0.73em 1.09em;
  margin-top: 1.66em;
`

const StyledHoldingBannerImage = styled.img`
  width: 6.29em;
  margin-right: -0.51em;
  z-index: 3;
`

const StyledHoldingBannerImage2 = styled.img`
  width: 5.33em;
  margin-left: -0.51em;
  margin-top: 1.66em;
  z-index: 3;
`

const StyledMessageRow1 = styled.div`
  font-size: 1em;
`

const StyledMessageRow2 = styled.div`
  font-size: 1em;
  display: inline-block;
  padding-right: 2.3em;
  padding-left: 2.3em;
`

function MessageBanner () {
  const useWebp = isWebpSupported()
  const { t } = useTranslation()
  return (
    <StyledMessageBanner>
      <StyledHoldingBannerImage src={useWebp ? holdingBannerImage1Webp : holdingBannerImage1} />
      <StyledMessage>
        <StyledMessageRow1>{t('Top.BannerMessageRow1')}</StyledMessageRow1>
        {
          t('Top.BannerMessageRow2') !== '' &&
          <StyledMessageRow2>{t('Top.BannerMessageRow2')}</StyledMessageRow2>
        }
      </StyledMessage>
      <StyledHoldingBannerImage2 src={useWebp ? holdingBannerImage2Webp : holdingBannerImage2} />
    </StyledMessageBanner>
  )
}

export default MessageBanner
