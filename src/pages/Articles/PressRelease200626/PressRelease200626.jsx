import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import Text from '../../../components/Text'
import img from './press-release.200626.png'
import imgWebp from './press-release.200626.webp'

const StyledPage = styled(Page)
`
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

const TitleContainer = styled.div
`
  text-align: center;
  margin: 2em 0;
`

const Title = styled(Text)
`
  display: block;
  color: #000;
  font-size: 2em
`

const TitleSmall = styled(Title)
`
  display: block;
  font-size: 1.72em;
`

const ImageContainer = styled.div
`
  width: 100%;
  text-align: center;
`

const Image = styled.img
`
  width: 450px;
  ${media.lessThan('large')`
    width: 250px;
  `}
  height: auto;
`

const Section = styled.div
`
  margin: 2em 0;
`

const Body = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  padding: 0 12em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

const StyledFooterContainer = styled.div
`
  margin-top: 5em;
`

const References = styled.div
`
  margin: 2em 0;
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.8em;
`

const ReferenceTitle = styled(Text)
`
  display: block;
  color: #000;
`

const ReferenceText = styled(Text)
`
  color: #000;
`

const Link = styled.a
`
  color: ${props => props.theme.blue};
  text-decoration: underline;
`

const TextSmall = styled(Text)
`
  display: block;
  color: #000;
  font-size: 0.9em;
`

const TextSmallUnderline = styled(TextSmall)
`
  text-decoration: underline;
`

const TextSmallRed = styled(Text)
`
  color: ${props => props.theme.red};
`

const TextMedium = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.1em;
`

function PressRelease200626() {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <Title>
        若者、小泉環境大臣との
        </Title>
        <Title>
        コロナ後の経済社会の再設計に関する意見交換会に出席
        </Title>
        <Title>
        ー小泉大臣：政府全体の動きをより脱炭素にー
        </Title>
      </TitleContainer>
      <ImageContainer>
        <Image src={isWebpSupported() ? imgWebp : img} />
      </ImageContainer>
      <Body>
      <Section>
      本日6月25日にFridays for Future Japan（以下FFFJ）のメンバー2名が環境大臣室に赴き、また8名がオンラインにて、小泉環境大臣とコロナ後の経済社会の再設計に関する意見交換を行いました。この意見交換会は、小泉環境大臣より、これからの気候危機時代において主役を担う若い世代の意見を聞きたいとの要請があり開かれました。当日はChange Our Next Decade、Climate Youth Japan、Japan Youth Platform for Sustainability、生物多様性わかものネットワークとともに参加しました。
      　現在、日本社会は、コロナ後の未来を決める時代の転換点にいます。私たちは環境への負荷を無視して経済成長を追求するような、「当たり前」に戻ろうとする今の社会に対して声を上げます。FFFJが望むのは、気候正義が実現し、パリ協定1.5度努力目標が達成され、誰もが尊厳をもって生きていける社会です。政策決定に関わる全ての方に対し、
  <TextSmallRed>アフターコロナの日本社会において、気候危機の深刻化を防ぐことができる暮らしに転換するため、グリーンリカバリ―の道を選ぶことを求めます。</TextSmallRed>
      </Section>
      <Section>
        FFFJからは、以下５つの指針を十分考慮して政策が実行されることを求める「コロナ後の経済社会の再設計に関する意見交換会に際する意見書」（3ページ以降記載）を環境大臣に提出し、趣旨を説明しました。
      </Section>
      <Section>
      <TextMedium>⒈Youth - 若者の視点を尊重する</TextMedium>
      <TextMedium>⒉Green - 脱炭素・環境負荷の少ない解決策を選ぶ</TextMedium>
      <TextMedium>⒊Fair - 公正な社会を実現する　</TextMedium>
      <TextMedium>⒋Resilient - 回復力のある持続可能な社会を実現する</TextMedium>
      <TextMedium>⒌Regeneration - 価値観の転換・社会の再構築</TextMedium>
      </Section>
      <Section>
      その後の質疑応答では、Fridays for Future Yokosukaの堺大輔が小泉環境大臣に以下のように質問しました。
      「環境省の気候非常事態宣言を歓迎します。しかしながら、小泉大臣の地元である横須賀では石炭火力が新設が計画されている状況にあります。またこの横須賀の発電所の建設中止を求めて、FFF Yokosukaでは小泉大臣宛のレターアクションを行いました。これらのことを踏まえ、
      <TextSmallRed>横須賀の石炭火力発電について大臣個人の意見や思いをお聞きしたいです</TextSmallRed>
      </Section>
      <Section>
      この質問に対し小泉環境大臣からは、
      「いただいた手紙は全て読みました。横須賀の海を見て育ったことが今の仕事につながっています。自分に出来ることを考え、
      <TextSmallRed>政府全体の動きをより脱炭素に、そしてやめられる石炭政策の部分をやめられる方向に持って行きたい。</TextSmallRed>
      経産省、財務省、外務省と合意をして、海外への石炭火力輸出を見直して、議論をようやく正式に始めたところなのでこれから頑張っていきたい。」
      との回答がありました。
      </Section>
        <TextMedium>◯代表連絡先</TextMedium>
        <TextSmallUnderline>メールアドレス</TextSmallUnderline>
        <TextSmall>media@fridaysforfuture.jp</TextSmall>
        <TextSmallUnderline>電話番号</TextSmallUnderline>
        <TextSmall>奥野華子（Fridays for Future Hiroshima)　080-1635-2179(メディア対応）</TextSmall>
        <TextSmall>鈴木弥也子(Fridays for Future Yokosuka)　080-1336-3890(横須賀石炭火力について)</TextSmall>
        <br />
        <TextMedium>◯環境大臣室での意見交換会参加者からのコメント</TextMedium>
        <TextSmall>◎岩野さおり（Fridays For Future Tokyo / 都立国際高校2年）</TextSmall>
        <TextSmall>
        私には選挙権がありません。しかし、気候変動の影響をこれから一番受ける若者の意見が気候変動対策をはじめとする今後の社会を形作る政策に反映されるべきであり、選挙権がないからといって無視されるべきではないと考えます。気候変動対策においてもその他の政策においても、アフターコロナの今この瞬間は大きな転換点です。今後の社会復興においてグリーンリカバリーが、脱炭素でより持続可能性のあるボトムアップの社会システムを築くための第一歩となります。従来通りの経済成長に回復を求めるのではなく、民主的アプローチによる社会再建とパリ協定1.５度努力目標に見合った気候変動対策によって、世代間の不平等を是正し、回復力のある、全ての人が尊厳をもって生きていける社会を実現することを求めます。
        </TextSmall>
        <br />
        <TextSmall>◎堺大輔（Fridays For Future Yokosuka / 日本大学経済学部2年）</TextSmall>
        <TextSmall>
        ポストコロナの社会を考えていくうえでグリーンリカバリ―は切っても切り離せない存在です。コロナからの復興をグリーンな対策なしで推し進めてしまえば、今後さらに気候変動からの影響は増え続け、将来人間の経済社会は成り立たなくなるはずです。今回の意見交換会は大変重要な機会であり、私たち若者の声をしっかりと大臣の元に届け、その声を元にグリーンな復興のために具体的な行動を起こすことを求めます！また、僕はFFF横須賀として活動していることもあり、大臣には大臣の地元でもある横須賀の石炭火力発電建設の中止を求めます。国内の石炭火力についても他省庁と連携してフェーズアウトへ向けて動くことに期待します。
        </TextSmall>
      </Body>

      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressRelease200626
