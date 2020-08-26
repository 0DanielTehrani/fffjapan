import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import IconButton from '../../components/GDCAHome/IconButton'
import sampleImg from './press-release.200626.png'

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

const ButtonsColumn = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
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


function GDCAJoin () {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  
  const handleSetProfileClick = () => {
    
  }

  const handleHandbookClick = () => {
    
  }
  
  return (
    <Page maxWidth='1120px'>
        <HeaderContainer><GDAHeader /></HeaderContainer>
        <TitleContainer><Title>参加しよう</Title></TitleContainer>
        <ButtonsContaienr>
          <ButtonsColumn>
            <ButtonContainer>
              <HashLink smooth to='gda-application-form#actions-list'>
                <IconButton text='イベント一覧'/>
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <a href="/logo.png" download >
              <IconButton text='プロフィールフレーム設定'/>
              </a>
            </ButtonContainer>
          </ButtonsColumn>
          <ButtonsColumn>
            <ButtonContainer>
              <HashLink smooth to='gdca-participants-info#join-online'>
                <IconButton text='オンラインで参加'/>
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <Link to='gdca-participants-info'>
                <IconButton text='参加者の心得'　onClick={handleHandbookClick}/>
              </Link>
            </ButtonContainer>
          </ButtonsColumn>
        </ButtonsContaienr>
      <FooterContainer><Footer /></FooterContainer>
    </Page>
  )
}

export default GDCAJoin
