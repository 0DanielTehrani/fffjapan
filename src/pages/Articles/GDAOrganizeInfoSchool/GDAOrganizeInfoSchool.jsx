import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

import GDAHeader from '../../../components/GDAHeader'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'


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
  font-size: 1.8em;
  font-weight: bold;
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
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
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

const StyledTable = styled.table
`
  border-collapse: collapse; 
  width: 100%;
  border: solid 1px;
  th {
    border-right: 1px solid;
  }
  td {
    text-align: center;
    border-top: 1px solid;
    border-right: 1px solid;
  }
`

function GDAOrganizeInfoSchool() {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
        <TitleContainer>
        <Title>アクションモデル：小中高校版 </Title>
        </TitleContainer>
        <Section>
        <div style={{ textAlign: 'center' }}>当日の登校時に下駄箱の前にプラカードを置いて、次の日に回収する。</div>
        <br />
        <Heading1Green>開催前</Heading1Green>
        <hr/>
        <ul>
          <li>アクションを設定する</li>
          <ul>
            <li>時間：登校してから帰宅するまで</li>
            <li>場所：下駄箱</li>
          </ul>
          <li>
            <Link to="gda-application-form"><TextLink>企画者応募フォーム（ここをクリック）</TextLink></Link>に記入
            （<LinkExternal href="https://actionnetwork.org/event_campaigns/global-strike-9-25-or-9-26" target='_blank'>海外版の企画者記入も忘れずに！</LinkExternal>）
          </li>
          <li>場所を手配する</li>
            <ul>
              <li>念のため、先生に伝えておく</li>
              <li>必要であれば、担任の先生（または学年主任）経由で校長先生に許可をもらう</li>
            </ul>
          <li>呼びかける</li>
          <ul>
          <li>対象：生徒、先生</li>
          <li>内容：アクション概要</li>
          <li>方法：</li>
          <ul>
            <li>直接呼びかける</li>
            <li>SNSの使用（イベントページの開設）、チラシ配布</li>
            <li>学校に直接伝えてもらう、お昼の放送</li>
          </ul>
          </ul>
          <li>準備するもの</li>
          <ul>
            <li>アクション</li>
            <ul>
            <li>プラカード</li>
            </ul>
            <li>（署名）→学校自体に置くことが禁止されているところが多いため注意！</li>
            <li>コロナ対策</li>
            <ul>
            <li>学校の方針に沿う</li>
            </ul>
            <li>熱中症対策</li>
            <ul>
            <li>塩分水分補給</li>
            </ul>
          </ul>
        </ul>
        <Heading1Green>開催当日</Heading1Green>
        <hr/>
        <li>それぞれの場所で待機&呼びかけ</li>
        <li>参加人数カウント、写真撮ってSNSにあげる</li>
        <li>FFFJapan（運営）に参加者数（靴の数）を連絡</li>
        <ul>
        <li>担当者：中村涼夏（FFF Nagoya）</li>
        <li>電話番号：080-1561-9887</li>
        <li>受付時間：9/25　18:00まで</li>
        </ul>
        <li>帰るまでがGDCA、気をつけて帰る！！</li>
        </Section>
        <Section>
          <Heading1Green>開催後</Heading1Green>
          <hr/>
          <ul>
          <li>靴をとりに来ない人の対応：下駄箱/教室のすみに置いとく、落とし物のところ</li>
          <li>学校にお礼言う！</li>
          <li>報告してさらにアピール</li>
          <ul>
          <li>校内、SNS、メディア</li>
          </ul>
          </ul>
        </Section>
      </Body>
    </StyledPage >
      
  )
}

export default GDAOrganizeInfoSchool
