import React from 'react'
import { Link } from 'react-router-dom'
import styled, { withTheme }  from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import IconButton from '../../components/GDCAHome/IconButton'
import { NEWSLETTER_SUB_URL } from '../../constants'
import shoes3 from './shoes3.png'
import { HashLink } from 'react-router-hash-link'
import joinUsText from './join-us-text.png'
import organizeText from './organize-text.png'

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
  margin-top: 2em;
  ${media.greaterThan('medium')`
    margin-top: 4em;
  `};
`

const Title = styled(Text)
`
  font-size: 1.5em;
  ${media.greaterThan('medium')`
    font-size: 3.5em;
  `};
  color: ${props => props.theme.black};
`


const ButtonsContaienr = styled.div
`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 13em;
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
  display: none;
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

const SubTitleContainer1 = styled.div
`
  text-align: center;
  margin-bottom: 0.5em;
`

const SubTitleContainer2 = styled.div
`
  text-align: left;
  width: 250px;
  ${media.greaterThan('medium')`
    width: 480px;
    `};
  margin: auto;
`

const SubTitle1 = styled(Text)
`
  font-size: 1em;
  ${media.greaterThan('medium')`
    font-size: 1.8em;
    `};
    color: ${props => props.theme.black};
`

const SubTitle2 = styled(Text)
`
  font-size: 0.8em;
  ${media.greaterThan('medium')`
    font-size: 1.5em;
    `};
  color: ${props => props.theme.black};
  text-decoration: underline;
`

function GDCAHome (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <StyledGDCAHome maxWidth='1120px'>
        <TitleContainer><Title>世界気候アクション0925</Title></TitleContainer>
        <SubTitleContainer1>
          {
            isMobileOrTablet ?
            <SubTitle1>What do we want?<br /> 私たちが求めること</SubTitle1> 
            : <SubTitle1>What do we want? 私たちが求めること</SubTitle1> 
          }
          <br />
        </SubTitleContainer1>
        <SubTitleContainer2>
          <HashLink to='gdca-demand#demand-1' smooth><SubTitle2>（1）1.5度目標の達成と早急な対策の実施</SubTitle2></HashLink><br />
          <HashLink to='gdca-demand#demand-2' smooth><SubTitle2>（2）公正な政策決定のプロセス</SubTitle2></HashLink><br />
          <HashLink to='gdca-demand#demand-3' smooth><SubTitle2>（3）若者の意見の尊重</SubTitle2></HashLink>
          </SubTitleContainer2>
        <ButtonsContaienr>
          <Link to='/gdca-join'>
            <ButtonContainer>
              <IconButton 
                text='参加する'　
                imgSrc={shoes3} 
                textColor={props.theme.blue} 
                textImgSrc={joinUsText}
                />
            </ButtonContainer>
          </Link>
          <Link to='/gda-application-form'>
            <ButtonContainer>
              <IconButton 
                text='企画する'　
                imgSrc={shoes3} 
                textColor={props.theme.blue}
                textImgSrc={organizeText}
               />
            </ButtonContainer>
          </Link>
        </ButtonsContaienr>
        <SubscribeContainer>
          <LatestInfoTitle>最新情報を入手</LatestInfoTitle>
          <SubscribeButton onClick={() => {window.open(NEWSLETTER_SUB_URL)}}>マーチ通信に登録する</SubscribeButton>
        </SubscribeContainer>
    </StyledGDCAHome>
  )
}

export default withTheme(GDCAHome)
