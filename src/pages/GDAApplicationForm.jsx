import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import GDAHeader from '../components/GDAHeader'
import Footer from '../components/Footer'
import Heading from '../components/GDAApplicationForm/Heading'
import Heading2 from '../components/GDAApplicationForm/Heading2'
import SentenceContainer from '../components/GDAApplicationForm/SentenceContainer'
import ActionsList from '../components/GDAApplicationForm/ActionsList'
import GoogleForm from '../components/GDAApplicationForm/GoogleForm'
import Page from '../components/Page'
import ClimateJusticeNow from '../components/RandomImages/ClimateJusticeNow'
import ShoesHand from '../components/RandomImages/ShoesHand'
import Text from '../components/Text'
import explain from '../components/GDAApplicationForm/explain'


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

const StyledDivider = styled.hr`
  border-width: 0.1px;
  width: 70%;
`

const GuidesContainer = styled.div
`
  margin-top: 2em;
  padding-bottom: 4em;
  width: 50%;
  margin: auto;
`

const GuidesTitle = styled(Text)
`
  font-size: 1.8em;
`

const GuideTitle = styled(Text)
`
  display: block;
  width: 175px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.green} !important;
  text-decoration: underline !important;
  font-size: 1.3em;
  &:hover {
    cursor: pointer !important;
  }
  
`



const Row = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.lessThan('medium')`
  flex-direction: column;
  `}
`

const StyledCol = styled.div
`
  text-align: center;
  padding: 1em 0;
`

const DemandSection = styled.div
`
  margin: 2em 0;
`

const DemandsContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
`

const DemandContainer = styled.div
`
  width: 340px;
  font-weight: bold;
  font-size: 1.1em;
  color: ${props => props.theme.black};
`

const DemandDetailsText = styled(Text)
`
  
`


function GDAApplicationForm () {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><GDAHeader /></HeaderContainer>
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
        <StyledDivider />
        <Box1Container>
          <SentenceContainer>
          {explain}
          </SentenceContainer>
        </Box1Container>
        <Heading2>アクションモデルガイドライン</Heading2>
        <GuidesContainer>
          <Row>
            <StyledCol><Link to='gdca-action-guide'><GuideTitle>企画：地域版</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-action-guide-university'><GuideTitle>企画：大学版</GuideTitle></Link></StyledCol>
          </Row>
          <Row>
            <StyledCol><Link to='gdca-action-guide-school'><GuideTitle>企画：小中高校版</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-participants-info'><GuideTitle>参加者の心得</GuideTitle></Link></StyledCol>
          </Row>
        </GuidesContainer>
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
