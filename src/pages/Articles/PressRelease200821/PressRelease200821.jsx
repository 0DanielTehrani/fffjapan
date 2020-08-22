import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import {
  Link
} from 'react-router-dom'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import img1 from './press-release.200821.jpg'
import img2 from './press-release.200821.png'

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

const TextAlignRight = styled(TextLight)`
  display: block;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TitleSmall = styled(Title)`
  display: block;
  font-size: 1.72em;
`

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`

const Image1Container = styled.div
`
  width: 320px;
  ${media.lessThan('large')`
    width: 160px;
  `}
  height: auto;
`

const Image2Container = styled.div
`
  margin-left: 1em;
  width: 500px;
  ${media.lessThan('large')`
    width: 250px;
  `}
  height: auto;
`

const Image = styled.img`
  width: 100%;
`

const Section = styled.div`
  margin: 2em 0;
`

const Body = styled.div`
  font-family: ${props => props.theme.fontFamilyLight};
  padding: 0 12em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

const StyledFooterContainer = styled.div`
  margin-top: 5em;
`

const References = styled.div`
  margin: 2em 0;
  font-family: ${props => props.theme.fontFamilyLight};
  font-size: 0.8em;
`

const ReferenceTitle = styled(TextLight)`
  display: block;
  color: #000;
`

const ReferenceText = styled(TextLight)`
  color: #000;
`

const TextSmall = styled(TextLight)`
  color: #000;
  font-size: 1em;
`

const TextSmallUnderline = styled(TextSmall)`
  text-decoration: underline;
  color: ${props => props.theme.blue};
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextSmallBold = styled(TextSmall)`
  font-family: ${props => props.theme.fontFamily};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

const TextMediumHeading = styled(TextMedium)`
  color: ${props => props.theme.green};
`

function PressRelease200821 () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <Title>
        若者からエネルギー政策の大転換を求める声明文の提出
        </Title>
        <br />
        <TitleAlignRight>2020年8月21日</TitleAlignRight>
        <TitleAlignRight>Fridays for Future Japan</TitleAlignRight> 
        <br />
      </TitleContainer>
      <ImageContainer>
        <Image1Container>
        <Image src={img1} />
        </Image1Container>
        <Image2Container>
        <Image src={img2} />
        </Image2Container>
      </ImageContainer>
      <Body>
        <Section>
        Fridays For Future Japan（以下、FFFJ）は日本の気候変動政策を強化するため、 全国各
地域で気候非常事態宣言発表や石炭火力発電所の建設中止、国政に対して温室効果ガス削減
目標（通称、NDC）の引き上げを求めて活動している若者のムーブメントです。
        </Section>
        <Section>
        　9月からは地球温暖化対策計画の議論が、秋からは未来投資会議が、そして遅くとも来年
7月からは第六次エネルギー基本計画の議論が始まるという、<TextSmallRed>
エネルギー政策において今が
日本の未来を左右する重要な時期 です。このような 非常に重要な局面において若者がそれに
注目している、見ているということをエネルギー政策に関わる人に知らせるため
</TextSmallRed>に、声明文
を出すことにしました。
        </Section>
        <Section>
        私たちFFFJは8月21日に安倍内閣総理大臣、梶山経済産業大臣、小泉環境大臣、茂木外務
大臣、保坂資源エネルギー庁長官、未来投資会議の委員様、中央環境審議会地球環境部会の
委員様・産業構造審議会地球環境小委員会の委員様、総合資源エネルギー調査会基本政策分
科会の委員様、長期エネルギー需給見通し小委員会の委員様宛に、責任ある気候変動対策・
<TextSmallBold>エネルギー政策を求める若者の声明文</TextSmallBold> を提出しました。
        </Section>
        
        <Section>
        声明文では
        <ul>
        <li><TextSmallBold>1.5度目標の達成と早急な対策の実施</TextSmallBold></li>
        <li><TextSmallBold>公正な政策決定のプロセス</TextSmallBold></li>
        <li><TextSmallBold>若者の意見の尊重</TextSmallBold></li>
        </ul>
        を求めています。声明文の全文は<Link to='/statement-2020-08-21'><TextSmallUnderline>こちら</TextSmallUnderline></Link>
です。ご参照ください。 <br />
　 それに伴い、 環境省の 地球環境局の小野局長 へFFFJメンバー3名が直接手渡したのち、 オン
ラインにて記者会見を行いました。 <br />
　今後は声明文に記載した内容で、署名活動も行っていく方針です。署名サイトのURLはこ
ちらです。

        <br />
        日本語&emsp;<a href="http://chng.it/6BB2BWjG" target='_blank'><TextSmallUnderline style={{ 'display': 'inline' }}>http://chng.it/6BB2BWjG</TextSmallUnderline></a><br/>
        英語&emsp;<a href="http://chng.it/rQXrZM2q" target='_blank'><TextSmallUnderline style={{ 'display': 'inline' }}>http://chng.it/rQXrZM2q</TextSmallUnderline></a>
        </Section>
        FFFJのウェブサイトからも確認できます。
      
      <Section>
      <TextMediumHeading>〇 連絡先</TextMediumHeading>
      <TextSmall>担当者：奥野華子(Fridays for Future Hiroshima)</TextSmall><br />
      <TextSmall>メールアドレス：</TextSmall>
      <TextSmallUnderline>media@fridaysforfuture.jp</TextSmallUnderline><br />
      <TextSmall>電話番号：</TextSmall>
      <TextSmall>080-1635-2179</TextSmall><br />
      </Section>
      
      <Section>
      <TextMediumHeading>〇 声明文の作成・提出を行ったメンバーからのコメント</TextMediumHeading>
      <TextMedium>冨永徹平（Fridays For Future Tokyo / Yokosuka　都立豊多摩高等学校3年）</TextMedium>
      気候変動による被害は、気候変動との関係性が見えづらく、実感を得づらい問題だと思い
ます。私たちはこの社会で生きているだけで、将来の自分たちの首を真綿で締めてしまうの
です。この状況を変えるためには、システムチェンジをするしかありません。これは今まで
求めてきたことであり、今後も変わらない限り、求めていきます。私は私たちの将来の社会
のために、責任のある行動を求めます。
    <br />
    <br />
    <br />
    <TextMedium>岩野さおり(Fridays For Future Tokyo / 都立国際高等学校2年 ）</TextMedium>
      NDCの数値を1.5℃目標に整合的になるよう定め、来年のCOPまでに提出し2030年までに
着実に温室効果ガスの排出量を減らしていくには、特にこれから始まる長期エネルギー需給
見通しやエネルギー基本計画の見直しにおいて気候危機を最重要課題と捉えた上での本気の
「脱炭素への挑戦」が必要です。また、その政策決定の中で下される決定は今後の私たちの
生活や未来に大きな影響を与え、私たち市民にもその意思決定に関わる権利と将来への責任
があるため、そのプロセスへの市民、特に気候変動の影響をより強く受ける若年世代の参画
は必須だと考えます。
      </Section>
      
      <Section>
      <Link to='/statement-2020-08-21'><TextSmallUnderline>こちらが声明文です。</TextSmallUnderline></Link>
      </Section>
      
      </Body>
      
      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressRelease200821
