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

const DemandsContainer = styled.div
`
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
`

function GDADemand () {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
      <Section>
        <TextSmall style={{ 'textAlign': 'center', 'fontWeight': 'bold' }}>
          私たちはNDC（温室効果ガス削減目標）の引き上げのために、<br />エネルギー政策決定に関わる会議を重要視しています。
          <br />コロナ禍からどうグリーンに復興していくかは私たちにかかっています。
        </TextSmall>
      </Section>
      <Section>
        <TitleContainer>
        <Title>
        What do we want? 私たちが求めること
        </Title>
        </TitleContainer>
        <DemandsContainer>
          <DemandContainer>（1）1.5度目標の達成と早急な対策の実施</DemandContainer>
          <DemandContainer>（2）公正な政策決定のプロセス</DemandContainer>
          <DemandContainer>（3）若者の意見の尊重</DemandContainer>
        </DemandsContainer>
        
      </Section>
      <Section>
        <Heading1>（1）1.5度目標の達成と早急な対策の実施 </Heading1>
        <Heading2>５年後ではなく今</Heading2>
パリ協定という国際的な気候変動解決の取り決めでは、気温上昇を1.5度に食い止めるという目標を掲げています。そして、来年11月の国際会議（COP26）が各国のCO2などの削減目標を引き上げて提出する５年に１度のタイミングです。<br/>
気温上昇を1.5度に食い止めるためには、５年後ではなく今、日本が掲げる温室効果ガスの削減目標（通称NDC）を「大幅に」引き上げることが必要です。
        <Heading2>早急な議論開始と政策転換</Heading2>
      そのために、削減目標の土台となるエネルギー政策の議論を早急に開始し、特に再生可能エネルギー100%実現に向けた抜本的な政策転換を求めます。
      </Section>
      
      <Section>
        <Heading1>（2）公正な政策決定のプロセス </Heading1>
        <Heading2>省庁横断型の議論</Heading2>
        従来の構造から脱却し、各省庁・内閣府で気候変動対策を最重要課題と捉え、省庁横断的な議論を進めるための体制を整えることを求めます。
        <Heading2>公正性と透明性の確保</Heading2>
        性別や年齢の偏りを自覚しメンバー構成を公正にすることを求めます。<br/>
再生可能エネルギーの専門家の参画や機能的な市民参加体制の整備などにより、科学の知見と気候変動の影響を受ける全ての人々の意見を反映させることを求めます。<br />
エネルギー政策に関する委員会のメンバー選定の流れの透明性を確保することを求めます。<br />
各審議会の会議のライブ、録画映像のYouTube投稿を限定公開から一般公開にすることを求めます。

      </Section>
      
      <Section>
        <Heading1>（3）若者の意見の尊重</Heading1>
        <Heading2>制度の見直し</Heading2>
        若い世代ほど気候危機の影響を受けやすいことから、選挙権のない人を含む若者全体の意見を汲み取る制度を設けることを求めます。
        <Heading2>責任ある行動を</Heading2>
        現行の政策では今までの世代が享受してきた当たり前の生活は保証されません。今の日本のエネルギー政策が大きく影響を及ぼす若い世代の将来に対して責任ある政策をとり、地球環境に最大限配慮した長期的な社会のあり方を目指した内容にすることを強く要求します。

        <br />
        <br />
        残された時間はわずかです。今、行動を起こしてください。
      </Section>
      
      <Section>
      <TitleContainer>
      <Title>
      How どうやって上の3つを達成するの？
      </Title>
      </TitleContainer>
      </Section>
      
      <Section>
      <Heading1>被選挙権がない学生、若者世代は、行動で示します！</Heading1>
      <Heading2>シューズアクションに参加</Heading2>
      ・<Link to='gda-application-form'><TextLink>イベントを企画しよう </TextLink></Link> <br />
      ・<HashLink smooth to='gda-application-form#actions-list'><TextLink>イベントに参加しよう</TextLink></HashLink><br />
      </Section>
      <Section>
      <Heading2>署名に参加</Heading2>
      上記を求める署名活動を行っています。署名リンクは<LinkExternal href={CHANGE_ORG_URL} target='_blank'>こちら</LinkExternal>！
      </Section>
      
      <Section>
      <Heading2>SNSで参加</Heading2>
      ・自宅からシューズアクションに参加しよう <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・<HashLink smooth to='/gdca-participants-info#join-online'><TextLink>「＃シューズアクション」のハッシュタグをつけて投稿</TextLink></HashLink><br />
      ・自分の思いをSNSで皆に伝えよう<br />
      </Section>
      
      <Section>
      <Heading2>SNSで拡散（Twitter・Instagram・Facebook等）</Heading2>
      ・FFFJのアカウントをフォロー<br />
      ・FFFJをタグ付けしてシェア
      </Section>

      </Body>
      <Footer />
    </StyledPage>
  )
}

export default GDADemand
