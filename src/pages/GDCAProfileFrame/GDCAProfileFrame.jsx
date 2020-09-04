import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import GDCAFooter from '../../components/GDCA/GDCAFooter'
import Page from '../../components/Page'
import GDCAPageHeading from '../../components/GDCA/GDCAPageHeading'
import FramesBox from './FramesBox'
import DownloadButton from './DownloadButton'
import profileFrame from './profile-frame.png'

const StyledGDCAProfileFrame = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

const TextContainer = styled.div
`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  margin: 30px 0;
`

const DownloadButtonContainer = styled.div
`
  margin-top: 30px;
  text-align: center;
`



function GDCAProfileFrame (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const joinUsWidth = isMobileOrTablet ? '330px' : '430px'
  
  return (
    <Page maxWidth='1120px'>
      <GDAHeader />
      <StyledGDCAProfileFrame>
        <GDCAPageHeading
          textImgSrc={profileFrame}
          title='プロフィールフレーム設定'
          color={props.theme.green}
        />
        <TextContainer>
        Facebookのプロフィール画像にフレームをつけて、世界気候アクション0925に参加しましょう！<br />
        プロフィールにフレームを付けるのは簡単！下のフレームを選択して設定するだけ。<br />
        Facebook以外のSNSでも活用してください！<br />
        期間を決めて、自動的にフレームをもとに戻す設定も可能です。<br />
        ぜひ、プロフィールの画像を変更して、多くの人に気候の重要性を伝えましょう！
        </TextContainer>
        <FramesBox />
        <DownloadButtonContainer>
          <DownloadButton />
        </DownloadButtonContainer>
      </StyledGDCAProfileFrame>
      <GDCAFooter />
    </Page>
  )
}

export default withTheme(GDCAProfileFrame)
