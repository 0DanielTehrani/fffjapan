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

const TitleSmall = styled(Title)`
  display: block;
  font-size: 1.72em;
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
  font-weight: 300;
  font-style: normal;
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

function Opinion200626 () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <br />
        <TitleAlignRight>令和2年6月23日</TitleAlignRight>
        <br />
        <TitleSmall>
        環境省及び関係省庁を含む政策決定に関わる全ての皆様
        </TitleSmall>
        <br />
        <TitleAlignRight>Firdays For Future Japan</TitleAlignRight>
        <br />
        <TitleSmall>コロナ後の経済社会の再設計に関する意見交換会に際する意見書</TitleSmall>
        <TitleSmall>グリーンリカバリーについて</TitleSmall>
      </TitleContainer>
      <Body>
        <Section>
        これまでの社会は、「経済成長」によって問題解決を図ってきました。しかし、かえってそれがコロナ禍を深刻化させました。これから先、気候危機においては科学の声に耳を傾け、社会構造自体を変革することが唯一の解決策となります。私たちが望むのは、気候正義が実現されパリ協定1.5度努力目標が達成された、全ての命が尊厳を持って生きていける社会です。日本社会は、コロナ後の未来を決める時代の転換点にいます。私たちは今、問題だらけの「当たり前」に戻ろうとする社会に対して声を上げます。
        </Section>
        <Section>
        Fridays For Future Japanは政策決定に関わる全ての方に対し、アフターコロナの日本社会において、以下５つの指針を十分考慮して政策が実行されることを求めます。社会をより持続的に、気候危機の深刻化を引き留めることができる暮らしに転換するために最も重要なタイミングである今、日本社会がグリーンリカバリ―の道を選ぶことを求めます。
        </Section>
        <Section>
          <TextSmall>指針</TextSmall>
          <TextSmall>⒈若者の視点を尊重する</TextSmall>
          <TextSmall>
        今後さらなるリスクの深刻化が予想される気候危機において、若い世代ほどより大きな影響を受けることになります。気候危機の最大の当事者であるのは政策決定者や短期的利益に執着する権力者ではなく私たち若者です。コロナ危機後の社会復興（再建）のあり方は今後数十年の社会を左右するため、今後の社会の再建計画において当事者である若者の意見が経済的利害関係の大小にかかわらず平等に扱われ政策に反映されることを求めます。未来の世界に住むのは私たち若者であり、私たちには持続可能な未来を求める権利があります。
          </TextSmall>
        </Section>
        <Section>
          <TextSmall>⒉Green - 脱炭素・環境負荷の少ない解決策を選ぶ</TextSmall>
          <TextSmall>
        パリ協定で掲げられた1.5℃努力目標を達成し気候危機による影響を最小限に抑え、若い世代が不均等な被害を受けるという世代間の不平等を是正するために、温室効果ガスの排出が少なく生態系への影響の少ない持続可能な解決策を選び財政投資を行うこと、その上で現在2030年度26％削減（2013年度比）としているNDC（国が決定する貢献）の数値目標を大幅に引きあげることを求めます。具体的な施策としては、エネルギー資源の早急なシフト（化石燃料への依存から再生可能エネルギーへの移行）及びそれに伴う雇用創出、建築物の断熱の普及などの熱エネルギー効率の向上、課税効果のある高税率かつ燃料ごとの排出係数の大小に比例した負担となるような炭素税の導入です。環境負荷が高く脱炭素社会への移行を妨げるような、未来のない方法やそれに支出することは認めません。若い世代につけを残すことは許されません。
          </TextSmall>
        </Section>

        <Section>
          <TextSmall>⒊Fair - 公正な社会を実現する</TextSmall>
          <TextSmall>
        私たちは今ここで、理不尽な社会構造に対して問題提起をします。社会的弱者であり危機にも脆弱な人々に対して十分な社会的保護を保証し、社会全体に蔓延するあらゆる差別や不正、不平等を取り除くことが必要です。なぜなら気候危機は生存権など多くの人権に影響を及ぼす事象であり、貧困層や女性、障がい者など弱い立場の人たちが特に苦しむことになり不平等を加速させるからです。どんな人も危機から守られ、尊厳のある生活を送ることが約束されるべきであり、それを実現する社会システムの構築を求めます。さらに、公正で透明性がありより多くの人々に開かれた政治を実現するために、政治的会議や未来像に関する意思決定プロセスの透明化を求めます。
          </TextSmall>
        </Section>

        <Section>
          <TextSmall>
          ⒋Resilient - 回復力のある持続可能な社会を実現する
          </TextSmall>
          <TextSmall>
          新型コロナウイルスによる危機を経験した今だからこそ、新たな危機に対して弾力性のある持続可能な社会を実現するために強力なレジリエンスを構築することを求めます。災害が頻発する日本においては、積極的に地域社会を支援し地方分散型のエネルギーシステムを整備し、災害に伴う大停電に対する対策を強化することが必要です。自然災害など、緊急事態発生時での対応に関する議論の活発化を強く求めます。また、トップダウンで中央集権型の社会構造は危機に対する脆弱性が高いため、今後の日本社会においてこのような権威主義は認められず、住民の生活に寄り添った民主的なプロセスが求められます。ボトムアップで回復力のある社会を築くことを求めます。
          </TextSmall>
        </Section>

        <Section>
          <TextSmall>⒌Regeneration - 価値観の転換・社会の再構築</TextSmall>
          <TextSmall>
          「経済成長＝市民の幸福」という古い概念を一新し、より良い労働環境の整備や大量消費経済からの脱却によって新たな幸福の指標の下に目標を掲げることを求めます。消費社会を前提とした政治戦略は持続的ではない、と強く主張します。「当たり前」と考えられていたことは必ずしも最善ではなく、より良い代替策はすでに存在します。以前の「当たり前」に戻る選択肢は残されていません。従来の社会システムに戻ることを最終目標とするのではなく、より良い選択肢によってより持続的な社会を新たに構築することをアフターコロナの社会復興（再建）の目指す所とすることを指針として求めます。グリーンリカバリーによる復興はゴールではなく、Regenerationによる「価値観の転換」及び「社会の再構築」への第一段階であると考えます。
          </TextSmall>
        </Section>
        <br />
        <TextAlignRight>以上</TextAlignRight>

      </Body>

      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default Opinion200626
