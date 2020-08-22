import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import media from 'styled-media-query'
import imgWebp from './mizuho-signature.png'
import img from './mizuho-signature.png'
import endorseB from './endorse-b.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page from '../../components/Page'
import Text from '../../components/Text'

import { MEGA_BANKS_SIGNATURE_URL, CHANGE_ORG_URL } from '../../constants'

const HeaderContainer = styled.div`
  margin-bottom: 3em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`
const PageTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 5em;
`

const PageTitle = styled(Text)`
  font-size: 2em;
  text-decoration: underline;
  ${media.lessThan('medium')`
    font-size: 1.4em;
  `};
`

const StyledBox = styled.div`
  background-color: ${props => props.theme.beige};
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Spacer = styled.div
`
  margin-top: 8em;
`

const ImageContainer = styled.div`
  margin-top: 2em;
`

const StyledImage = styled.img`
  width: 750px;
  height: auto;
  ${media.lessThan('medium')`
    width: 250px;
  `};
`

const StyledText = styled(Text)``

const TitleContianer = styled.div`
  padding: 0 10em;
  text-align: center;
  ${media.lessThan('medium')`
    padding: 0 0.3em;
  `};
`

const BoxTitle = styled(Text)`
  display: block;
  font-size: 2em;
  ${media.lessThan('medium')`
    font-size: 1.6em;
  `};
`

const TextSmall = styled(Text)
`
  color: #000;
`

const JoinButtonContainer = styled.div`
  margin-top: 2em;
`

const JoinButton = styled.button`
  width: 250px;
  height: 72px;
  ${media.lessThan('medium')`
    width: 250px;
    height: 72px;
  `};
  color: white;
  background-color: #005500;
  text-decoration: none;
  font-size: 1.1em;
  border-radius: 5px;
  font-family: ${props => props.theme.fontFamily};
  &:focus {outline:0;}
  &:hover {
    cursor: pointer;
  }
}
`

const SpacerSmall = styled.div
`
  margin-top: 2em;
`

const SocialsPostExampleContainer = styled.div
`
  width: 65%;
  ${media.lessThan('medium')`
    width: 90%;
  `}
`

const TextBold = styled(Text)
`
  display: block;
  text-align: center;
  font-family: ${props => props.theme.fontFamilyBold};
`

const TextLarge = styled(Text)
`
  font-size: 1.5em;
  display: block;
  text-align: center;
`


function Actions () {
  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><Header /></HeaderContainer>
      <PageTitleContainer>
        <PageTitle>アクションに参加しよう！</PageTitle>
      </PageTitleContainer>
      <StyledBox>
        <TitleContianer>
          <BoxTitle>【#私たちの未来を奪わないで】</BoxTitle>
          <BoxTitle>日本政府は今すぐ本気の<br/>気候変動対策をとってください</BoxTitle>
          <SpacerSmall />
          <TextSmall>
          気候変動の脅威はすでにあらわれています。 <br />
私たちの未来は今まで社会を築いてきた人々によって失われようとしています。
しかし、私たちはそんな未来を受け入れる気はありません。 <br />
気候危機を訴え、十分な対策をとるよう求めるため、署名を立ち上げました。<br />
時間はありません、今すぐ行動を起こしてください。<br />
          </TextSmall>
        </TitleContianer>
        <ImageContainer>
          <StyledImage src={endorseB}>
          </StyledImage>
        </ImageContainer>
        <JoinButtonContainer>
          <JoinButton onClick={() => { window.open(CHANGE_ORG_URL) }}>署名をする</JoinButton>
        </JoinButtonContainer>
        <SocialsPostExampleContainer>
        <TextSmall>
        <br />
        <br />
        <br />
        <TextLarge>SNSでシェアしよう！</TextLarge>
        <br />
        <div style={{ 'textAlign': 'center'}}>↓SNS投稿例　コピペしてね↓</div>
        <TextBold>【インスタ・FBなど】</TextBold> <br />
FFFJは、気候危機を訴え、十分な対策をとるよう求めるため、署名を立ち上げました。<br />
気候変動の脅威はすでにあらわれています。<br />
私たちの未来は今まで社会を築いてきた人々によって失われようとしています。<br />
しかし、私たちはそんな未来を受け入れる気はありません<br />
時間はありません、今すぐ行動を起こしてください。<br />
‪以下のキャンペーンに賛同をお願いします！<br/>
「【 #私たちの未来を奪わないで 】日本政府は今すぐ本気の気候変動対策をとってください。」 
<a href="http://chng.it/GhXxFjsy" target='_blank'>http://chng.it/GhXxFjsy</a>
<br/>
<br/>
<br/>
<TextBold>【Twitter】</TextBold> <br/>
‪以下のキャンペーンに賛同をお願いします！<br/>
「【 #私たちの未来を奪わないで 】日本政府は今すぐ本気の気候変動対策をとってください。」
<a href="http://chng.it/GhXxFjsy" target='_blank'>http://chng.it/GhXxFjsy</a><br/>
‪FFFJは、署名を立ち上げました。
‪気候変動の脅威はすでにあらわれています。 時間はありません、今すぐ行動を起こしてください。
</TextSmall>
        </SocialsPostExampleContainer>
        
      </StyledBox>
      <Spacer />
      <StyledBox>
        <TitleContianer>
          <BoxTitle>【6/21まで】緊急国際署名</BoxTitle>
          <BoxTitle>日本の３メガバンクさん、
          地球温暖化を止めるため石炭火力から完全撤退を！</BoxTitle>
        </TitleContianer>
        <ImageContainer>
          <StyledImage src={isWebpSupported() ? imgWebp : img}>
          </StyledImage>
        </ImageContainer>
        <JoinButtonContainer>
          <JoinButton onClick={() => { window.open(MEGA_BANKS_SIGNATURE_URL) }}>署名をする</JoinButton>
        </JoinButtonContainer>
      </StyledBox>
      <FooterContainer><Footer /></FooterContainer>
    </Page>
  )
}

export default Actions
