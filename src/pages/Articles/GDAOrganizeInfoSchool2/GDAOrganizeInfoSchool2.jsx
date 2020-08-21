import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as _Link } from 'react-router-dom'

import GDAHeader from '../../../components/GDAHeader'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'


export const StyledPage = styled(Page)`
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

export const TitleContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`

export const Title = styled(Text)`
  display: block;
  color: #000;
  font-size: 2em
`

export const Section = styled.div`
  margin: 2em 0;
`

export const Body = styled.div`
  font-family: ${props => props.theme.fontFamilyLight};
  font-weight: 300;
  font-style: normal;
  padding: 0 12em;
  margin-top: 5em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

export const Link = styled(_Link)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
`

export const LinkExternal = styled.a
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

export const Heading1 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.8em;
  font-weight: bold;
`

export const Heading1Green = styled(Heading1)
`
  color: ${props => props.theme.green};
  text-align: center;
`



export const Heading2 = styled(Text)
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

function GDAOrganizeInfoSchool2() {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
        <Section>
        <Heading2>大学モデル </Heading2>
        <div style={{ textAlign: 'center' }}>各自設定した場所で靴とプラカードを並べて、当日中に回収する。</div>
        <br />
        <Heading1Green>開催前</Heading1Green>
        <hr/>
        <ul>
          <li>アクションを設定する</li>
          <ul>
            <li>時間：朝、一日中、昼休み、放課後など</li>
            <li>場所：体育館・運動場・教室・エントランス・校門前など</li>
          </ul>
          <li>
            <Link to="gda-application-form">企画者応募フォーム（ここをクリック）</Link>に記入
            （<LinkExternal href="https://actionnetwork.org/event_campaigns/global-strike-9-25-or-9-26" target='_blank'>海外版の企画者記入も忘れずに！</LinkExternal>）
          </li>
          <li>場所を手配する</li>
            <ul>
              <li>体育館などを使用する際は学校の窓口に連絡する</li>
              <li>玄関などでやる場合は必要ない場合が多い</li>
              <li>靴たちは所有者と写真に撮って、返却時に参照して確認</li>
            </ul>
          <li>呼びかける</li>
          <ul>
          <li>対象：参加者、メディア</li>
          <li>日時、場所、アクション概要</li>
          <li>方法：</li>
          <ul>
            <li>直接呼びかける、口コミ</li>
            <li>SNSの使用（イベントページの開設）、チラシ配布</li>
            <li>掲示板・学内メールアドレス</li>
          </ul>
          </ul>
          <li>準備する</li>
          <ul>
            <li>アクション</li>
            <ul>
            <li>プラカード</li>
            <li>靴の引換券(大規模なら)</li>
            <li>シフト(大規模なら)</li>
            </ul>
            <li>署名</li>
            <ul>
            <li>QRコードできれば！！！</li>
            </ul>
            <li>コロナ対策</li>
            <ul>
            <li>フェイスシールド</li>
            <li>検温（学校でやってるかも）</li>
            <li>消毒用アルコール</li>
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
        <li>メディア対応</li>
        <li>ディスタンス呼びかけ、靴の返却作業</li>
        <li>参加人数カウント、写真撮ってSNS等で報</li>
        <li>FFFJapan（運営）に参加者数（靴の数）を連絡</li>
        <ol>
        <li>担当者：中村涼夏（FFF Nagoya）</li>
        <li>電話番号：080-1561-9887</li>
        <li>受付時間：9/25　18:00まで</li>
        </ol>
        <li>帰るまでがGDCA、気をつけて帰る！！</li>
        </Section>
        <Section>
          <Heading1Green>開催後</Heading1Green>
          <hr/>
          <ul>
          <li>靴をとりに来ない人の対応：忘れ物センター</li>
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

export default GDAOrganizeInfoSchool2
