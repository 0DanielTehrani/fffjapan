import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import IconButton from '../../components/GDCAHome/IconButton'
import { NEWSLETTER_SUB_URL } from '../../constants'

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`


const TitleContainer = styled.div
`
  text-align: center;
`

const Title = styled(Text)
``


const ButtonsContaienr = styled.div
`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `};
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div
``

const LatestInfoTitle = styled(Text)
`
  display: block;
`

const SubscribeContainer = styled.div
`
  text-align: center;
`

const SubscribeButton = styled.button
`
`


function GDCAHome () {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <Page maxWidth='1120px'>
        <TitleContainer><Title>世界気候アクション0925</Title></TitleContainer>
        <ButtonsContaienr>
          <ButtonContainer><IconButton text='参加しよう'　/></ButtonContainer>
          <ButtonContainer><IconButton text='企画'　/></ButtonContainer>
        </ButtonsContaienr>
        <SubscribeContainer>
          <LatestInfoTitle>最新情報を入手</LatestInfoTitle>
          <SubscribeButton onClick={() => {window.open(NEWSLETTER_SUB_URL)}}>マーチ通信に登録する</SubscribeButton>
        </SubscribeContainer>
    </Page>
  )
}

export default GDCAHome
