import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import img from './press-release.200623.png'
import imgWebp from './press-release.200623.webp'

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

const TitleSmall = styled(Title)`
  display: block;
  font-size: 1.72em;
`

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`

const Image = styled.img`
  width: 450px;
  ${media.lessThan('large')`
    width: 250px;
  `}
  height: auto;
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

const Link = styled.a`
  color: ${props => props.theme.blue};
  text-decoration: underline;
`

const TextSmall = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 0.9em;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

const TextMediumHeading = styled(TextMedium)`
  color: ${props => props.theme.green};
`

function PressRelease200623 () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <TitleSmall>
          現役大学生4人が気候変動の要因を生み出す銀行に物申す
        </TitleSmall>
        <Title>
          石炭火力発電事業に加担するメガバンク株主総会に参加!
        </Title>
      </TitleContainer>
      <ImageContainer>
        <Image src={isWebpSupported() ? imgWebp : img} />
      </ImageContainer>
      <Body>
        <Section>
        スウェーデンの17歳の気候活動家、グレタ・トゥーンベリさんの気候ストライキに端を発して世界中に気候危機解決の運動が広がっています。、日本では、<TextSmallRed>6月下旬に開かれる日本3メガバンクの2行
        の(みずほ銀行、三菱UFJ銀行)の株主総会に、</TextSmallRed>気候変動への対策強化を求める若者組織の国内全国
        ネットワーク「Fridays For Future Japan(以下FFFJ)」に属する現役大学生4人が、<TextSmallRed>気候変動を訴える日本の若者としては初めて</TextSmallRed>参加します。
        </Section>
        <Section>
        世界中の政治の場で大きな問題として取り扱われ、被害が益々深刻化している「気候変動」問題。
        日本でも今年6月は厳しい暑さから第一週の時点で1194人が体調不良を訴え、そのうち2人が亡くな
        りました(*1)​。先日、環境省では、地球温暖化によって今後、豪雨災害などのさらなる頻発化・激甚化が予測されるとして「気候危機宣言」を出しています(*2)​。
        </Section>
        <Section>
        このような状況の中、日本の3メガバンクは、気候変動の大きな要因である石炭火力発電事業に多
  額の投融資をしています。昨年開かれたCOP25の期間には、石炭火力発電に投融資している世界銀
  行ランキングで、3メガバンクが上位3位を占めていることがドイツの環境NGOルゲワルド(
  Urgewald)およびオランダのバンクトラック(Banktrack)によって指摘されました(*3)​。
        </Section>
        <Section>
      石炭火力発電所の新規案件に投融資をしないことを3メガバンクは公言していますが(*4)​、現在の方針には抜け穴があり東南アジア諸国での新規建設が懸念されるなど、パリ協定の1.5°C目標を達成するには程遠い現状と言わざるを得ません(*5)​。
        </Section>
        <Section>
      コロナ禍で停滞した経済活動が再び動き出そうとしている今、グリーン・リカバリーに基づいて、より公平な社会を築けるかどうかの大きな境目と考えます。そこで、<TextSmallRed>気候危機の影響を最も受ける世代である私たちFFFJは、銀行の取締役会に脱石炭をはじめとする化石燃料に関わる事業への投資撤退を求めるために、学生初めての試みとして株主総会に参加し、会場での発言を試みます。</TextSmallRed>
        </Section>
        <References>
          <ReferenceTitle>
          *1 Sputnik日本(2020)「厳しい暑さの日本 6月第1週で体調不良1194人、死者2人」『Sputnik日本』
          </ReferenceTitle>
          <Link href='https://jp.sputniknews.com/life/202006097524781/' target='_blank' rel='noopener noreferrer'>https://jp.sputniknews.com/life/202006097524781/</Link>
          <ReferenceText>&emsp;(閲覧2020/06/19)</ReferenceText>

          <ReferenceTitle>
          *2 水戸部六美(2020)「気象災害の頻発を予測、環境省が「気候危機宣言」」『朝日新聞』
          </ReferenceTitle>
          <Link href='https://www.asahi.com/articles/ASN6D4S72N6CULBJ00P.html' target='_blank' rel='noopener noreferrer'>https://www.asahi.com/articles/ASN6D4S72N6CULBJ00P.html</Link>
          <ReferenceText>&emsp;(閲覧2020/06/19)</ReferenceText>

          <ReferenceTitle>
          *3 国際環境NGO 350.0rg Japan・気候ネットワーク(2019)「日本の金融機関・投資家が石炭投融資リストのトップを独占
          </ReferenceTitle>
          <Link href='https://world.350.org/ja/press-release/191205/' target='_blank' rel='noopener noreferrer'>https://world.350.org/ja/press-release/191205/</Link>
          <ReferenceText>&emsp;(閲覧2020/06/19)</ReferenceText>

          <ReferenceTitle>
        *4 毎日新聞(2020)「脱炭素、3メガ銀苦渋 みずほ「石炭火力融資行わない」明記 「まだ不十分」投資家圧力」『毎 日新聞』
          </ReferenceTitle>
          <Link href='https://mainichi.jp/articles/20200520/ddm/008/020/101000c' target='_blank' rel='noopener noreferrer'>https://mainichi.jp/articles/20200520/ddm/008/020/101000c</Link>
          <ReferenceText>&emsp;(閲覧2020/06/20)</ReferenceText>

          <ReferenceTitle>
        *5 気候ネットワーク他(2020)【NGO緊急共同声明】みずほFGが石炭新方針を発表~抜け穴は完全に塞ぐべき」
          </ReferenceTitle>
          <Link href='https://www.kikonet.org/info/press-release/2020-04-15/Mizuho_Coal_Finance_Policy-jointrelease' target='_blank' rel='noopener noreferrer'>https://www.kikonet.org/info/press-release/2020-04-15/Mizuho_Coal_Finance_Policy-jointrelease</Link>
          <ReferenceText>&emsp;(閲覧2020/06/20)</ReferenceText>
        </References>
        <TextMediumHeading>◆日時・場所</TextMediumHeading>
        <TextSmall>※それぞれの株主総会の後に小規模なアクションを行う準備も進めています。</TextSmall>
        <br />
        <TextSmall>みずほ銀行株主総会（参加者：高橋、益子、高倉）</TextSmall>
        <TextMedium>日時：6月25日（木）10:00～</TextMedium>
        <TextMedium>場所：東京国際フォーラム ホールC （東京都千代田区丸の内3丁目5番1号）</TextMedium>
        <br />
        <TextSmall>三菱UFJ銀行株主総会（参加者：鈴木）</TextSmall>
        <TextMedium>日時：6月29日（月）10:00～</TextMedium>
        <TextMedium>場所：グランドプリンスホテル新高輪 「飛天」（東京都港区高輪三丁目13番1号）</TextMedium>
        <br />
        <TextMediumHeading>◆ 連絡先</TextMediumHeading>
        <TextSmall>メールアドレス：contact@fridaysforfuture.jp</TextSmall>
        <TextSmall>電話番号：090-2721-7651</TextSmall>
        <TextSmall>益子実香（Fridays For Future Nasu）</TextSmall>
        <br />
        <TextMediumHeading>◆取材に際してのお願い</TextMediumHeading>
        <TextSmall>・取材をしていただける場合は事前に上記メールまたは携帯番号までご連絡をお願いします。</TextSmall>
        <TextSmall>・株主総会において必ずしも発言の機会が与えられるとは限りません。</TextSmall>
        <TextSmall>・当日のアクションについては準備中です。</TextSmall>
        <br />
        <TextMediumHeading>◆参加する現役大学生のコメント</TextMediumHeading>
        <TextMedium>益子実香（Fridays For Future Nasu）</TextMedium>
        <TextSmall>
        気候変動は早ければ残り10年で取り返しがつかないと言われており、決して未来の問題ではなく現在すでに目の前に被害の実態が広がっている「危機」です。既得権益にとらわれ、気候危機にしっかりと向き合わない政治や経済で決定権を持つ人たちの行動で多くの罪のない命が失われています。当たり前に接してきた美しい那須の自然も壊されそうになっています。このままでは未来がありません。銀行の取締役会にいる方々は私よりも経験も知識も豊富で、周囲からの人望があるからトップになっているはずです。それにもかかわらず、気候変動を食い止めるためのスピードで石炭火力発電から投融資撤退をしていません。よって、今回の株主総会に参加して本格的な「変化」「英断」を求めます！
        </TextSmall>
        <br />
        <TextMedium>髙橋大輝（Fridays For Future Tokyo）</TextMedium>
        <TextSmall>
        気候変動の被害は、国内外ともに深刻化し、今もこの先もずっと私たちが、そしてまだ生まれていない世代さえも向き合い続けなければならない問題です。今を生きる人々の選択が世界の未来を大きく左右するという意識を持たなければなりません。石炭火力発電事業への投融資は、気候変動の悪化や大気汚染による健康被害を引き起こし、人々の命を脅かします。他の国々をリードするどころか、世界の足を引っ張っている日本の現状に憤りを感じています。各銀行には、見せかけだけでなく、本当にパリ協定に整合的な、持続可能な社会を築くための大きな勇気ある一歩を踏み出して欲しいと思っています。
        </TextSmall>

      </Body>

      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressRelease200623
