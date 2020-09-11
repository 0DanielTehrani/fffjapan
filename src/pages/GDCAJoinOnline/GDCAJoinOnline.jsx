import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import PageGDCA from '../../components/PageGDCA'
import GDCAPageHeading from '../../components/GDCA/GDCAPageHeading'
import Text from '../../components/Text'
import joinOnline from './join-online.png'
import sampleInsta from './sample-insta.jpg'
import sampleTwitter from './sample-twitter.png'
import hashTag from './images/hash-tag-1.png'
import shoes from './images/shoes.png'
import shoesAction from './images/shoes-action.png'


const StyledPage = styled(Page)`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 13px;
  `}
`

const Divider = styled.hr
`
  border: solid 1px;
  border-color:  ${props => props.theme.blue};
  width: 80%;
  margin: auto;
  margin-top: 1em;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
`

const TextContainerCenter = styled(TextContainer)
`
  text-align: center;
`

const InstaImageContainer = styled.div
`
  height: 500px;
  width: 50%;
  ${media.lessThan('large')`
    width: 100%;
    height: auto;
  `}
  text-align: center;
`

const TwitterImageContainer = styled.div
`
  width: 400px;
  text-align: center;
  margin-right: 50px;
  ${media.lessThan('large')`
    width: 100%;
    height: auto;
    margin-right: 0px;
  `}
`

const SampleImage = styled.img
`
  height: 100%;
  width: auto;
  ${media.lessThan('large')`
    width: 100%;
    height: auto;
  `}
`

const TwitterSampleImage = styled.img
`
  width: 100%;
  height: auto;
`

const ImageContainer = styled.div
`
  height: 200px;
  width: auto;
  text-align: center;
  margin-top: 2em;
`

const ImageContainerSmall = styled.div
`
  width: 400px;
  ${media.lessThan('large')`
    width: 100%;
  `}
  height: auto;
`

const ShoesImageContainer = styled.div
`
  width: 200px;
  margin: auto;
  margin-top: 4em;
  text-align: center;
  ${media.lessThan('large')`
    width: 100%;
  `}
  height: auto;
`

const Image = styled.img
`
  width: 100%;
  ${media.lessThan('large')`
    width: 80%;
  `}
  height: auto;
`


const BoxTitle = styled(Text)
`
  margin-bottom: 2em;
  display: block;
  color: #000;
  font-size: 1.8em;
  text-align: center;
`

const LargeBox = styled.div
`
  background-color: ${props => props.theme.beige};
  padding: 2em;
  ${media.lessThan('large')`
    padding: 1em;
  `}
`

const UpperContainer = styled.div
`
`

const LowerContainer = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  align-items: center;
  padding: 0 4em;
  margin-top: 4em;
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    padding: 0 1em;
  `}
`

const StyledText = styled(Text)
`
  color: #000;
`

const WhiteLabelText = styled(StyledText)
`
  background-color: #fff;
  padding: 0.5em;
`

function GDCAJoinOnline (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  
  return (
    <PageGDCA maxWidth='1120px'>
      <GDCAPageHeading
        textImgSrc={joinOnline}
        title='オンラインで参加しよう！'
        color={props.theme.black}
      />
      <LargeBox>
        <UpperContainer>
          <BoxTitle bold>1．オンラインでシューズアクション</BoxTitle>
          <TextContainerCenter>
            InstagramやTwitterでClimate Shoes Actionに参加したい場合は...<br />
            靴とプラカードの写った写真と<br />
  <StyledText bold>「＃シューズアクション」「＃気候危機に特効薬なし」</StyledText>をつけてSNSに投稿！<br />
            実際に参加者としてカウントされます！
          </TextContainerCenter>
        </UpperContainer>
        <Divider />
        <LowerContainer>
          <InstaImageContainer>
            <SampleImage src={sampleInsta} />
          </InstaImageContainer>
          <TextContainer>
<StyledText bold>アクションの日時</StyledText>：<WhiteLabelText>9月25日（金）終日</WhiteLabelText>
<br />
<br />

<StyledText bold>方法：</StyledText> <br />
・靴とプラカードの写真を撮る<br />
・「＃シューズアクション」<br />
「＃気候危機に特効薬なし」をつけてSNSに投稿！
          
            <ShoesImageContainer>
              <Image src={shoes} />
            </ShoesImageContainer>
          </TextContainer>
        </LowerContainer>
      </LargeBox>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <LargeBox>
        <UpperContainer>
          <BoxTitle bold>2．ツイートストーム</BoxTitle>
          <TextContainerCenter>
            <StyledText bold>9月25日18時</StyledText>に一斉にツイートしてトレンド入りを目指そう！！<br />
            短時間に多く使われたハッシュタグはTwitterのトレンド一覧に表示されます。<br />
            トレンド入りすることで気候危機に関心のない人にリーチできる！
          </TextContainerCenter>
        </UpperContainer>
        <Divider />
        <LowerContainer>
          <TwitterImageContainer>
            <TwitterSampleImage src={sampleTwitter} />
          </TwitterImageContainer>
          <TextContainer>
          <ImageContainerSmall>
            <Image src={hashTag} />
          </ImageContainerSmall>
<StyledText bold>アクションの日時</StyledText>：<WhiteLabelText>9月25日（金）18時</WhiteLabelText>
<br />
<br />

<StyledText bold>方法：</StyledText> <br />
・靴とプラカードの写真を撮る<br />
・「＃シューズアクション」<br />
「＃気候危機に特効薬なし」をつけてTwitterに投稿！
          
            <ImageContainerSmall>
              <Image src={shoesAction} />
            </ImageContainerSmall>
          </TextContainer>
        </LowerContainer>
      </LargeBox>
      
    </PageGDCA>
  )
}

export default withTheme(GDCAJoinOnline)
