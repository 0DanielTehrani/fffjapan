import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/GDAApplicationForm/Heading'
import Heading2 from '../components/GDAApplicationForm/Heading2'
import SentenceContainer from '../components/GDAApplicationForm/SentenceContainer'
import ActionsList from '../components/GDAApplicationForm/ActionsList'
import GoogleForm from '../components/GDAApplicationForm/GoogleForm'
import Page from '../components/Page'
import ClimateJusticeNow from '../components/RandomImages/ClimateJusticeNow'
import ShoesHand from '../components/RandomImages/ShoesHand'


const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`

const StyledGDAApplicationForm = styled.div`
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

const Heading1Container = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${
    media.greaterThan('medium')`
      flex-direction: row-reverse;
    `
  }
`;

const Box1Container = styled.div
`
  margin: 50px 0;
  ${
    media.greaterThan('medium')`
      padding: 0 200px;
    `
  }
`;

const Box2Container = styled.div
`
  margin: 50px 0;
  ${
    media.greaterThan('medium')`
      padding: 0 100px;
    `
  }
`;

const ActionsListContainer = styled.div
`
  margin-top: 30px;
`

const FormContainer = styled.div
`
  margin: 50px 0;
`

const Image1Container = styled.div
`
  width: 125px;
  display: none;
  ${media.greaterThan('medium')
    `
      display: block;
      margin-right: 40px;
    `
  }
`

const Image2Container = styled.div
`
  width: 125px;
  text-align: center;
  ${media.greaterThan('medium')
    `
      display: block;
      margin-left: 40px;
      text-align: left;
    `
  }
`

function GDAApplicationForm () {
  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><Header /></HeaderContainer>
      <StyledGDAApplicationForm>
        <Heading1Container>
          <Image2Container>
            <ShoesHand width='50px'/>
          </Image2Container>
          <Heading>企画しよう！</Heading>
          <Image1Container>
            <ClimateJusticeNow width='125px'/>
          </Image1Container>
        </Heading1Container>
        <Box1Container>
          <SentenceContainer>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </SentenceContainer>
        </Box1Container>
        <Box2Container>
          <Heading2>イベントを確認しよう！</Heading2>
          <ActionsListContainer>
            <ActionsList />
          </ActionsListContainer>
        </Box2Container>
        <FormContainer>
          <Heading2>登録しよう！</Heading2>
          <GoogleForm />
        </FormContainer>
      </StyledGDAApplicationForm>
      <FooterContainer><Footer /></FooterContainer>
    </Page>
  )
}

export default GDAApplicationForm
