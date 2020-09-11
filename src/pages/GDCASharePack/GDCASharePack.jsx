import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import PageGDCA from '../../components/PageGDCA'
import DownloadButton from '../../components/GDCA/DownloadButton'
import Box from './Box'

const DownloadButtonContainer = styled.div
`
  margin-top: 80px;
  margin-bottom: 200px;
  text-align: center;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  margin: 0 80px;
`

const BoxesContainer = styled.div
``



function GDCASharePack (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <PageGDCA maxWidth='1120px'>
      <TextContainer>
      以下よりダウンロードできるシェアパックには、
      世界気候アクション0925（GDCA）の広報に使える素材が詰まってます！
      </TextContainer>
      <BoxesContainer>
        <Box
          title='署名QRコード'
          text='印刷してプラカードに貼り、署名を呼びかけよう！'
        >
        </Box>
      </BoxesContainer>
      <DownloadButtonContainer>
        <DownloadButton href='' text='シェアパックをダウンロード' />
      </DownloadButtonContainer>
    </PageGDCA>
  )
}

export default GDCASharePack
