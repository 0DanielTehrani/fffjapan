import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import PageGDCA from '../components/PageGDCA'
import DownloadButton from '../components/GDCA/DownloadButton'

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


function GDCASharePack (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <PageGDCA maxWidth='1120px'>
      <TextContainer>
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      シェアパックについての説明シェアパックについての説明シェアパックについての説明シェアパックについての説明
      </TextContainer>
      <DownloadButtonContainer>
        <DownloadButton href='' text='シェアパックをダウンロード' />
      </DownloadButtonContainer>
    </PageGDCA>
  )
}

export default GDCASharePack
