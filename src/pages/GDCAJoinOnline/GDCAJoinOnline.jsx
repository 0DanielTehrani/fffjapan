import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import GDAHeader from '../../components/GDAHeader'
import GDCAFooter from '../../components/GDCA/GDCAFooter'
import GDCAPageHeading from '../../components/GDCA/GDCAPageHeading'
import joinOnline from './join-online.png'
import sampleInsta from './sample-insta.jpg'
import sampleTwitter from './sample-twitter.png'


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

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
`


const TwitterImageContainer = styled.div
`
  width: 60%;
`

const TwitterImage = styled.img
`
width: 100%;
`

const InstaImageContainer = styled.div
`
  width: 35%;
`

const InstaImage = styled.img
`
  width: 100%;
`

const SampleImagesContainer = styled.div
`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  padding: 0 12em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
`



function GDCAJoinOnline (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  
  return (
    <StyledPage maxWidth='1120px'>
      <HeaderContainer><GDAHeader /></HeaderContainer>
      <GDCAPageHeading
        textImgSrc={joinOnline}
        title='オンラインで参加しよう！'
        color={props.theme.black}
      />
      <TextContainer>
        靴とプラカードの写った写真と「＃シューズアクション」をつけてSNSに投稿！<br />
        実際に参加者としてカウントされます！
      </TextContainer>
      <SampleImagesContainer>
        <InstaImageContainer>
        <InstaImage src={sampleInsta} />  
        </InstaImageContainer>
        <TwitterImageContainer>
        <TwitterImage src={sampleTwitter} />  
        </TwitterImageContainer>
      </SampleImagesContainer>
      <GDCAFooter />
    </StyledPage>
  )
}

export default withTheme(GDCAJoinOnline)
