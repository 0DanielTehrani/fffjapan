import React from 'react'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import GDAHeader from '../../../components/GDAHeader'
import GDCAPageHeading from '../../../components/GDCA/GDCAPageHeading' 
import GDCAHeading2 from '../../../components/GDCA/GDCAHeading2'
import SectionHeading from '../../../components/GDCA/SectionHeading'
import GDCAHeading3 from '../../../components/GDCA/GDCAHeading3'
import GDCADivider from '../../../components/GDCA/GDCADivider'
import GDCALabelText from '../../../components/GDCA/GDCALabelText'
import GDCAFooter from '../../../components/GDCA/GDCAFooter'
import IconButton from '../../../components/GDCAJoin/IconButton'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import { ArrowDown } from '@styled-icons/icomoon/ArrowDown'
import howToJoin from './how-to-join.png'
import joinOnline from './join-online.png'
import greenArrow from './green-arrow.png'

import sampleInsta from './sample-insta.jpg'
import sampleTwitter from './sample-twitter.png'
import shoes2 from './shoes2.png'

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

const TitleContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`

const Title = styled(Text)`
  display: block;
  color: #000;
  font-size: 2em
`

const Section = styled.div`
  margin: 2em 0;
`

const SectionPossessions1 = styled(Section)
`
    margin: auto;
    width: 260px;
`


const SectionPossessions2 = styled(Section)
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

const Body = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-style: normal;
  padding: 0 12em;
  margin-top: 5em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

const TextLink = styled(Text)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
`

const LinkExternal = styled.a
`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`

const TextSmall = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1em;
`

const TextSmallUnderline = styled(TextSmall)`
  text-decoration: underline;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

const Heading1 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
`


const Heading1Inline = styled(Heading1)
`
  display: inline;
  color: #000;
  font-size: 1.4rem;
`

const Heading1Green = styled(Heading1)
`
  color: ${props => props.theme.green};
  text-align: center;
`



const Heading2 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.1em;
  font-weight: bold;
`

const Heading3 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1em;
  font-weight: bold;
`

const Heading2Green = styled(Text)
`
  display: block;
  color: ${props => props.theme.green};
  font-size: 1.1em;
  font-weight: bold;
`

const ArrowDownContainer = styled.div
`
  text-align: center;
  margin: 3em 0;
`


const TwitterImageContainer = styled.div
`
  width: 60%;
`

const TwitterImage = styled.img
`
width: 100%;
`

const InstaImageContainer = styled.div
`
  width: 35%;
`

const InstaImage = styled.img
`
  width: 100%;
`

const SampleImagesContainer = styled.div
`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ProcessTextContainer = styled.div
`
  padding-left: 24px;
`

const ProcessItemContainer = styled.div
`
  padding: 0 24px;
  margin: 12px 0;
`

const GreenArrow = styled.img
`
  width: 250px;
  height: auto;
  ${media.lessThan('medium')`
    width: 120px;
  `}
`

const JoinOnlineButtonContainer = styled.div
`
  display: flex;
  justify-content: center;
`





function GDAParticipantInfo (props) {
  return (
    <StyledPage maxWidth='1280px'>
      <GDAHeader />
      <GDCAPageHeading 
        textImgSrc={howToJoin}
        title='GDCA参加者の心得'
        color={props.theme.red}
      />
      <Body>
        <TitleContainer>
          <br />
          <Heading1>１、<Heading1Inline bold>靴とプラカード</Heading1Inline>を持ってくるべし！</Heading1>
          <Heading1>２、<Heading1Inline bold>周りを巻き込んで</Heading1Inline>アクションすべし！</Heading1>
          <Heading1>３、<Heading1Inline bold>三密</Heading1Inline>を避けてアクションすべし！</Heading1>
        </TitleContainer>
        <SectionHeading 
          title='手順'
        />
        <ProcessItemContainer>
          <GDCAHeading3>1. 見つけよう！</GDCAHeading3>
          <ProcessTextContainer>
FFF JapanのHPの<HashLink smooth to='gda-application-form#actions-list'><TextLink>企画一覧</TextLink></HashLink>から自分の地域のアクションを見つけよう！<br />
自分の地域近くに開催場所がない場合はSNS発信しよう！（発信の方法は下をチェック）
          </ProcessTextContainer>
        </ProcessItemContainer>
        <ProcessItemContainer>
          <GDCAHeading3>2. 検索して、要件チェック！</GDCAHeading3>
          <ProcessTextContainer>
          <HashLink smooth to='gda-application-form#actions-list'><TextLink>企画一覧</TextLink></HashLink>のページから各地域のイベントページへ
各地域の企画内容と要件をチェックしてみよう！<br/>
&emsp;注：事前申し込みが必要な地域もあるので要チェック！
          </ProcessTextContainer>
        </ProcessItemContainer>
        <ProcessItemContainer>
          <GDCAHeading3>3．イベントに参加！</GDCAHeading3>
          <ProcessTextContainer>
実際にイベントに参加しよう！忘れ物はないかな？（下の持ち物をチェック！）<br/>
開催場所にあるQRコードからFFFが行っている署名に参加しよう！<br/>
後片付けも忘れずに！
          </ProcessTextContainer>
        </ProcessItemContainer>
        <ProcessItemContainer>
          <GDCAHeading3>4．靴やプラカードを回収しよう！</GDCAHeading3>
          <ProcessTextContainer>
SNSで自分の思いとともにみんなへ拡散だ
          </ProcessTextContainer>
        </ProcessItemContainer>
        
        <Section>
        <br />
          <br />
          <Heading2  style={{ 'textAlign': 'center' }}>近くに開催場所がない！<br/ >感染対策でオンラインで参加したい！</Heading2>
          <ArrowDownContainer>
            <GreenArrow src={greenArrow} />
          </ArrowDownContainer>
          <JoinOnlineButtonContainer>
            <Link to='gdca-join-online'>
              <IconButton 
                text='オンラインで参加' 
                imgSrc={shoes2} 
                textImgSrc={joinOnline}
                textColor={props.theme.black}
              />
            </Link>
          </JoinOnlineButtonContainer>
        </Section>

          <SectionHeading title='持ち物'/>
        <SectionPossessions1>
          <GDCAHeading3>1. 靴</GDCAHeading3>
          <GDCAHeading3>2. プラカード（任意）</GDCAHeading3>
          <GDCAHeading3>3. 感染予防グッズ（マスク）</GDCAHeading3>
        </SectionPossessions1>
        
        <SectionPossessions2>
        <Section>
          <GDCALabelText>Q１：どんな靴がいいの？</GDCALabelText>
          <Heading2Green></Heading2Green>
          <ul>
          <li><Heading3>汚れてもよいもの</Heading3></li>
          <li><Heading3>濡れてもよいもの</Heading3></li>
          <li><Heading3>飛ばされにくいもの</Heading3></li>
          <ul>
          <li>飛ばされやすい場合は重石など各自持参</li>
          </ul>
          <li><Heading3>紛失してもよいもの</Heading3></li>
          <ul>
          <li>&emsp;紛失しても、運営側は責任は取りません。予めご了承ください。</li>
          <li>&emsp;指定時間まで取りに来ない場合は、こちらで処分します。</li>
          <li>&emsp;(ごみゼロにご協力ください！)</li>
          </ul>
          </ul>
        </Section>
        
        <Section>
          <GDCALabelText>Q２：どんなプラカードがいいの？</GDCALabelText>
          <ul>
          <li><Heading3>各自事前に作ってきてね！</Heading3></li>
          <li><Heading3>デザイン</Heading3></li>
          <ul>
          <li>自分の訴えたいこと！</li>
          <li>なんでも大歓迎！</li>
          <li>一緒に叫ぼう！</li>
          </ul>
          <li><Heading3>大きさ</Heading3></li>
          <ul>
          <li>各自持ち運びやすい大きさ</li>
          </ul>
          <li><Heading3>素材</Heading3></li>
          <ul>
          <li>開催場所を要確認</li>
          <li>例えば...体育館（段ボール・ホワイトボード）</li>
          <li>公園→雨の場合が考えられるため</li>
          <li>（ホワイトボード・布バナー等）</li>
          </ul>
          </ul>
        </Section>
        </SectionPossessions2>
        <GDCAFooter />
      </Body>
    </StyledPage>    
  )
}

export default withTheme(GDAParticipantInfo)
