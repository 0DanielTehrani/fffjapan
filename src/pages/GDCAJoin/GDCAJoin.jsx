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
import ShoesHand2 from '../../components/RandomImages/ShoesHand2'
import IconButton from '../../components/GDCAJoin/IconButton'
import Heading from '../../components/GDAApplicationForm/Heading'
import Heading2 from '../../components/GDAApplicationForm/Heading2'
import sampleImgSrc from './shoes1-2.png'
import { 
  Heading1Container,
  Image1Container,
  Image2Container,
  StyledDivider 
} from '../GDAApplicationForm'

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`

const StyledGDCAJoin = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

const ButtonsContaienr = styled.div
`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `};
  align-items: center;
  justify-content: center;
  margin: 5em 0;
`

const ButtonsColumn = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const ButtonContainer = styled.div
`
  margin: 1em;
`

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
  
  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><GDAHeader /></HeaderContainer>
        <StyledGDCAJoin>
        <Heading1Container>
          <Image2Container>
            <ShoesHand2 width='100px'/>
          </Image2Container>
          <Heading>参加しよう！</Heading>
          <Image1Container>
            <ShoesHand2 width='100px'/>
          </Image1Container>
        </Heading1Container>
        <StyledDivider />
        <ButtonsContaienr>
          <ButtonsColumn>
            <ButtonContainer>
              <HashLink smooth to='gda-application-form#actions-list'>
                <IconButton text='イベント一覧' imgSrc={sampleImgSrc}/>
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <a href="/logo.png" download >
              <IconButton text='プロフィールフレーム設定' imgSrc={sampleImgSrc}/>
              </a>
            </ButtonContainer>
          </ButtonsColumn>
          <ButtonsColumn>
            <ButtonContainer>
              <HashLink smooth to='gdca-participants-info#join-online'>
                <IconButton text='オンラインで参加' imgSrc={sampleImgSrc}/>
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <Link to='gdca-participants-info'>
                <IconButton text='参加者の心得'　imgSrc={sampleImgSrc}/>
              </Link>
            </ButtonContainer>
          </ButtonsColumn>
        </ButtonsContaienr>
      <FooterContainer><Footer /></FooterContainer>
      </StyledGDCAJoin>
    </Page>
  )
}

export default GDCAJoin
