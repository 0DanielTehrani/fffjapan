import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Header from '../../../components/Header'
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

const TitleAlignRight = styled(TextLight)`
  display: block;
  width: 85%;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TitleAlignLeft = styled(TextLight)`
  display: block;
  width: 85%;
  text-align: left;
  margin-left: auto;
  color: #000;
  font-size: 1em;
`

const Section = styled.div`
  margin: 2em 0;
`

const Body = styled.div`
  font-family: ${props => props.theme.fontFamilyLight};
  font-weight: 300;
  font-style: normal;
  padding: 0 12em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

export const Heading1 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.4em;
  font-weight: bold;
`

export const Heading2 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.1em;
  font-weight: bold;
`


function Statement200821() {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>  
        <Title>責任ある気候変動対策・エネルギー政策を求める若者の声明</Title><br />
        <TitleAlignRight>2020/08/21</TitleAlignRight>
      </TitleContainer>
      <Body>
      安倍内閣総理大臣 <br />
      経産省　梶山大臣 <br />
      環境省　小泉大臣 <br />
      外務省　茂木大臣 <br />
      国交省　赤羽大臣 <br />
      エネ庁　保坂長官 <br />
      未来投資会議の委員様 <br />
      基本政策分科会の委員様 <br />
      温対・産構審の委員様 <br />
      長期エネルギー需給見通し小委員会の委員様 <br />
      <Section>
      私たちFridays for Future Japanは、気候変動を止めるための若者のムーブメントです。
「気候変動を食い止め、全ての人がその影響から公平に守られる世界を実現する」ために、以下の3つを求めます。
      </Section>

      <Section>
        <Heading1>（1）1.5度目標の達成と早急な対策の実施 　</Heading1>
        <hr />
        <Heading2>５年後ではなく今</Heading2>
        パリ協定という国際的な気候変動解決の取り決めでは、気温上昇を1.5度に食い止めるという目標を掲げています。そして、来年11月の国際会議（COP26）が各国のCO2などの削減目標を引き上げて提出する５年に１度のタイミングです。
気温上昇を1.5度に食い止めるためには、５年後ではなく今、日本が掲げる温室効果ガスの削減目標（通称NDC）を「大幅に」引き上げることが必要です。
        <br/>
        <br/>
        <Heading2>早急な議論開始と政策転換</Heading2>
        そのために、削減目標の土台となるエネルギー政策の議論を早急に開始し、特に再生可能エネルギー100%実現に向けた抜本的な政策転換を求めます。
      </Section>
      
      <Section>
      <Heading1>（2）公正な政策決定のプロセス 　</Heading1>
      <hr />
      <Heading2>省庁横断型の議論</Heading2>
      従来の構造から脱却し、各省庁・内閣府で気候変動対策を最重要課題と捉え、省庁横断的な議論を進めるための体制を整えることを求めます。
      <br/>
      <br/>
      <Heading2>公正性と透明性の確保</Heading2>
      性別や年齢の偏りを自覚しメンバー構成を公正にすることを求めます。 <br />
      再生可能エネルギーの専門家の参画や機能的な市民参加体制の整備などにより、科学の知見と気候変動の影響を受ける全ての人々の意見を反映させることを求めます。 <br />
      エネルギー政策に関する委員会のメンバー選定の流れの透明性を確保することを求めます。 <br />
      各審議会の会議のライブ、録画映像のYouTube投稿を限定公開から一般公開にすることを求めます。

      </Section>
      
      <Section>
        <Heading1>（3）若者の意見の尊重</Heading1>
        <hr />
        <Heading2>制度の見直し</Heading2>
        若い世代ほど気候危機の影響を受けやすいことから、選挙権のない人を含む若者全体の意見を汲み取る制度を設けることを求めます。
        <br/>
        <br/>
        <Heading2>責任ある行動を</Heading2>
        現行の政策では今までの世代が享受してきた当たり前の生活は保証されません。今の日本のエネルギー政策が大きく影響を及ぼす若い世代の将来に対して責任ある政策をとり、地球環境に最大限配慮した長期的な社会のあり方を目指した内容にすることを強く要求します。

      </Section>
      
      <Section>
      </Section>
      </Body>
      <br/>
      <br/>
      <TitleAlignRight>Fridays for Future Japan</TitleAlignRight>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </StyledPage>
  )
}


export default Statement200821;
