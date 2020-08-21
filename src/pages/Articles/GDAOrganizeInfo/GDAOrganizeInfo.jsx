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
  ol {list-style-type: lower-roman;}
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
    text-align: center;
  }
  td {
    text-align: center;
    border-top: 1px solid;
    border-right: 1px solid;
  }
`

function GDAOrganizeInfo () {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
        <TitleContainer>
          <Title>アクションモデル：地域版</Title>
        </TitleContainer>
        <div style={{ 'textAlign': 'center'}}>オーガナイザー：4-5人想定</div>
        <Section>
          <Heading1Green >開始前</Heading1Green>
          <hr/>
          <Heading2>8月中</Heading2>
          <ol>
            <li>場所の選定（広場・公園・駅前）</li>
            <ul>
              <li>選定基準</li>
              <ul>
              <li>3密でない場所</li>
              <li>ある程度人目につく場所</li>
              <li>人の迷惑にならない場所</li>
              </ul>
            </ul>
          <li>時間の検討</li>
            <ul>
              <li>プレリに合わせて終わる時間を決める：終わりが17時半までになるようにする</li>
              <li>例）16時-18時に開催(ピークの時間＆シューズの数のカウント：17時)</li>
              <li>場所の予約は実際にアクションをする時間の前後1時間取る</li>
            </ul>
          <li>
            <Link to="gda-application-form">企画者応募フォーム（ここをクリック）</Link>に記入
            （<LinkExternal href="https://actionnetwork.org/event_campaigns/global-strike-9-25-or-9-26" target='_blank'>海外版の企画者記入も忘れずに！</LinkExternal>）
          </li>
          <li>
          運営メンバーを集める
          </li>
          </ol>
        </Section>
        <Section>
          <Heading2>9月</Heading2>
          <ol>
            <li>SNS広報</li>
            <ul>
              <li>FFFJapan（以下FFFJ）配布のSNS発信画像などを使用して、参加者にお知らせ</li>  
            </ul>
            <li>靴の置き方を検討</li>
            <li>賛同団体・企業の店舗がある場合は協力を呼びかけるのもあり！</li>
            <li>チラシを置くor配る</li>
            <li>雨が降った時の代替案を検討（屋根のない会場のみ</li>
            <ul>
            <li>SNS発信のみにする</li>
              <li>ウェビナーを開催する等</li>
            </ul>
          </ol>
        </Section>
        
        <Section>
          <Heading2>二週間前</Heading2>
          <ol>
            <li>事前申し込み開始<LinkExternal href="https://docs.google.com/forms/d/e/1FAIpQLScdKaBTRwIe0KIN66q4qduA2HXtiaMMh4HtDfJbJZZwkJq3iw/viewform" target="_blank">（申し込みGoogleフォーム例はこちらから）</LinkExternal></li>
            <ul>
              <li>参考にしてください</li>
              <li>Googleフォーム（例）と同じものが欲しい場合はFFFJまで連絡ください。</li>
            </ul>
            <li>署名のQR印刷（防水対策でラミネートなどの工夫等）</li>
            <li>（靴の引換券の準備）：靴の回収などをスムーズにするため</li>
            <li>メディアに連絡</li>
            <ul>
            <li>
            地域版プレスリリース編集（FFFJが9月中旬に土台を作成します）
            </li>
            <li>市役所や県庁の記者クラブに投げこみ</li>
            <li>繋がってる記者さんに連絡</li>
            </ul>
          
          </ol>
        </Section>
        <Heading2>3日前</Heading2>
        <Section>
          <ol>
            <li>メディアに連絡</li>
            <li>（スタンディングで宣伝）</li>
          </ol>
        </Section>
        
        <Section>
          <Heading2>前日まで</Heading2>
          <ol>
            <li>コロナ対策グッズ購入</li>
          </ol>
        </Section>
        
        <Section>
          <Heading1Green>当日</Heading1Green>
          <hr/>
          <ul>
            <li>持っていくもの</li>
            <ul>
              <li>カウンター（アプリ可能）・プラカード・ゴミ袋・靴・飲み物・携帯・カメラ・財布・道路交通許可書的な書類・QRコード・モバイルバッテリー・チラシ・マスク・使い捨て手袋・アルコール</li>
            </ul>
            <li>16時-18時パターン(ピーク＆カウント：17時)</li>
            <StyledTable border='1' cellspacing="0" cellpadding="5">
              <tr>
                <th>時間帯</th>
                <th>内容</th>
              </tr>
              <tr>
                <td>6時（予約）</td>
                <td>SNS投稿</td>
              </tr>
              <tr>
                <td>15時</td>
                <td>会場入り<br />プラカードを置く<br />コロナグッズ設置</td>
              </tr>
              <tr>
                <td>16時</td>
                <td>靴の受け取りスタート<br />署名(QR)依頼 <br />インスタライブコラボ <br />メディア対応</td>
              </tr>
              <tr>
                <td>17時</td>
                <td>靴カウントをFFFJ報告 <br />靴の引き渡し開始</td>
              </tr>
              <tr>
                <td>18時</td>
                <td>靴の撤収<br/ >片付け・掃除</td>
              </tr>
              <tr>
                <td>19時</td>
                <td>地域メディアにプレスリリース送信</td>
              </tr>
              
            </StyledTable>
            <li>アクション中はその場で待機</li>
            <ol>
              <li>水分補給</li>
              <li>当番制など</li>
              <li>引換券の準備</li>
              <li>感染症対策</li>
              <li>署名の呼びかけ</li>
            </ol>
            <li>メディア対応</li>
            <ol>
            <li>適宜写真撮影</li>
            </ol>
            <li>ストーリーでリアルタイム発信</li>
            <li>参加した人数・靴のカウント</li>
            <li>片付け</li>
            <ol>
            <li>取りに来ない靴処理</li>
            <li>掃除</li>
            </ol>
            <li>
            FFFJapan（運営）に参加者数（靴の数）を連絡
            </li>
            <ol>
            <li>担当者：中村涼夏（FFF Nagoya）</li>
            <li>電話番号：080-1561-9887</li>
            <li>受付時間：9/25　18:00まで</li>
            </ol>
            <li>帰るまでがGDCA、気をつけて帰る！！</li>
          </ul>
        </Section>
        
        <Section>
          <Heading1Green>開催後</Heading1Green>
          <hr/>
          <ul>
          <li>手伝ってくれた人にお礼</li>
          <li>SNSで活動報告</li>
          <li>メディア対応（事後プレスリリース送信）</li>
          </ul>
        </Section>
      </Body>
      <Footer />
    </StyledPage>
  )
}

export default GDAOrganizeInfo;
