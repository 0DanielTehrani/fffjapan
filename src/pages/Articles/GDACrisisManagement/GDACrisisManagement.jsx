import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import GDAHeader from '../../../components/GDAHeader'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import { CHANGE_ORG_URL } from '../../../constants'

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
  font-size: 1.4em;
  font-weight: bold;
  color: ${props => props.theme.green};
`

const Heading2 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.1em;
  font-weight: bold;
`



function GDACrisisManagement () {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
        <TitleContainer>
          <Title>GDCA危機管理ガイドライン</Title>
        </TitleContainer>
        <Section>
        <Heading2>新型コロナウイルス感染症対策</Heading2>
        <ul>
        <li>開催日当日前2週間以内に海外渡航や県をまたぐ移動をした人は
        <HashLink smooth to='/gdca-participants-info#join-online'><TextLink>個人のアクションへの参加</TextLink></HashLink>を推奨します。</li>
        <li>屋外の会場を推奨します。</li>
        <li>参加当日、事前に体温を計測してもらい、37.5度以上ある人は参加はお控えいただくことを推奨します。</li>
        <li>接触を避けてください。</li>
        <ul>
          <li>使い捨て手袋を使用してください。</li>
          <li>会場に来る人の時間をずらしてください。</li>
        </ul>
          <li>cocoaのインストールを参加者に推奨してください。</li>
          <li>アルコール消毒をしてください。</li>
          <li>マスクを着用してください。</li>
          <li>咳エチケットにご協力お願いします。</li>
          <li>ソーシャルディスタンスを保ってください。</li>
        </ul>
        </Section>
        
        <Section>
        
        <Heading2>自然災害（原則、開催の判断は各会場に委ねます）</Heading2>
        <ul>
        <li>雨の場合</li>
        <ul>
          <li>事前に天気予報をチェックするようにしてください。<LinkExternal target='_blank' href='https://www.jma.go.jp/jp/yoho/'>気象庁</LinkExternal></li>
          <li>大雨/洪水警報が出ている場合は中止を推奨します。</li>
          <li>屋根のない会場の場合は、雨の強さで決行か中止かを判断し、速やかに報告をお願いいたします。</li>
          <li>濡れてもよい持ち物（靴・プラカードなど）を持ってくるよう、参加者に連絡してください。</li>
          <li>雨合羽などの傘など強風の場合に危害が及ばないものの着用を推奨します。</li>
          <li>危険を感じた場合は速やかに中止し、参加者に報告をお願いいたします。</li>
        </ul>
        </ul>
        
        <ul>
        <li>強風の場合</li>
        <ul>
          <li>事前に天気予報をチェックするようにしてください。<LinkExternal target='_blank' href='https://www.jma.go.jp/jp/yoho/'>気象庁</LinkExternal></li>
          <li>暴風警報が出ている場合は中止してください。</li>
          <li>飛ばされてもよい持ち物（靴・プラカード）を持参するよう、参加者に連絡してください。</li>
          <li>重しになるものの持参を推奨してください。（運営側では重しを用意する必要はありません。）</li>
          <li>紛失破損については責任を負いかねる旨を事前に伝えてください</li>
          <li>危険を感じた場合は速やかに中止し、参加者に報告をお願いいたします。</li>
        </ul>
        </ul>
        
        <ul>
        <li>地震の場合</li>
        <ul>
          <li>避難経路や避難場所を事前に確認してください。</li>
          <li>避難の際にはオーガナイザーの指示に従って、会場から避難場所に避難してください。</li>
          <li>危険を感じた場合は速やかに中止し、参加者に報告をお願いいたします。</li>
        </ul>
        </ul>
        
        <ul>
        <li>二次災害（土砂災害・洪水・河川の氾濫など）</li>
        <ul>
          <li>適宜天気予報をチェックしてください。<LinkExternal target='_blank' href='https://www.jma.go.jp/jp/yoho/'>気象庁</LinkExternal></li>
          <li>警報が出ている場合は中止を推奨します。</li>
          <li>事前に避難経路／場所の確認をお願いいたします。</li>
          <li>参加者地域が被災した場合は無理な参加は呼びかけないようお願いいたします。</li>
          <li>危険を感じた場合は速やかに中止し、参加者に報告をお願いいたします。</li>
        </ul>
        </ul>
        
        </Section>
        
        <Section>
        <Heading2>熱中症対策</Heading2>
        <ul>
          <li>こまめに水分・塩分を補給をしてください。</li>
          <li>こまめに日陰に移動をして休憩をとってください。</li>
          <li>日傘を使ったり帽子を被ったりしてください。</li>
          <li>濡れてもよい持ち物（靴・プラカードなど）を持ってくるよう、参加者に連絡してください。</li>
          <li>無理はせず、急病人が出た場合には救急車を呼んでください。</li>
          <li>危険を感じた場合は速やかに中止し、参加者に報告をお願いいたします。</li>
        </ul>
        </Section>
        
        <Section>
        <Heading2>相談・困ったときの連絡先</Heading2>
        <br />
        9/25 アクション前日までの連絡
        <hr />
        黒部　睦（くろべ むつみ）　FFF Tokyo<br />
        電話番号：080-9975-8672<br />
        メールアドレス：toastoolofbridge3437@icloud.com
        <br />
        <br />
        9/25 アクション当日の連絡
        <hr />
        黒部　睦（くろべ むつみ）　FFF Tokyo<br />
        電話番号：080-9975-8672

        </Section>
        
        
      </Body>
      <Footer />
    </StyledPage>
  )
}

export default GDACrisisManagement
