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
import joinIcon from './tmp-icon.png'
import orgIcon from './tmp-icon.png'

const StyledGDCAHome = styled(Page)
`
`

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`


const TitleContainer = styled.div
`
  text-align: center;
  margin: 2em 0;
  ${media.greaterThan('medium')`
    margin: 4em 0;
  `};
`

const Title = styled(Text)
`
  font-size: 1.5em;
  ${media.greaterThan('medium')`
    font-size: 2.5em;
  `};
  color: ${props => props.theme.black};
`


const ButtonsContaienr = styled.div
`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  ${media.greaterThan('medium')`
    flex-direction: row;
    padding: 0;
  `};
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div
`
  width: 100%;
  margin-top: 1em;
  ${media.greaterThan('medium')`
    width: auto;
    margin: 0 5em;
  `};
`

const LatestInfoTitle = styled(Text)
`
  display: block;
  font-size: 1em;
  ${media.greaterThan('medium')`
    font-size: 2em;
  `};
  color: ${props => props.theme.black};
`

const SubscribeContainer = styled.div
`
  text-align: center;
  margin-top: 2em;
  ${media.greaterThan('medium')`
    margin-top: 6em;
  `};
`

const SubscribeButton = styled.button
`
  padding: 1em;
  font-size: 1rem;
  ${media.greaterThan('medium')`
    font-size: 1.5rem;
  `};
  background-color: ${props => props.theme.blue};
  color: #fff;
  border: 0px;
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`


function GDCAHome () {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <StyledGDCAHome maxWidth='1120px'>
        <TitleContainer><Title>世界気候アクション0925</Title></TitleContainer>
        <ButtonsContaienr>
          <ButtonContainer><IconButton text='参加する'　imgSrc={joinIcon } /></ButtonContainer>
          <ButtonContainer><IconButton text='企画する'　imgSrc={orgIcon} /></ButtonContainer>
        </ButtonsContaienr>
        <SubscribeContainer>
          <LatestInfoTitle>最新情報を入手</LatestInfoTitle>
          <SubscribeButton onClick={() => {window.open(NEWSLETTER_SUB_URL)}}>マーチ通信に登録する</SubscribeButton>
        </SubscribeContainer>
    </StyledGDCAHome>
  )
}

export default GDCAHome
