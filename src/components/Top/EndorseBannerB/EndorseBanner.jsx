import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import slider from './endorse-b.png'
import { useHistory } from "react-router-dom";
import { CHANGE_ORG_URL } from '../../../constants'

const EndorseBannerContainer = styled.div
`
  position: relative;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button
`
  background-color: #fff;
  position: absolute;
  right: 3%;
  top: 30%;
  width: 80px;
  height: 40px;
  color: #000;
  font-size: 0.8em;
  font-family: 'Noto Sans JP Medium';
  font-weight: bold;
  ${media.greaterThan('medium')`
    width: 280px;
    height: 100px;
    font-size: 2.5em;
  `}
  ${media.greaterThan('large')`
    width: 300px;
    height: 120px;
    font-size: 2.5em;
  `} 
  
  border: 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

const TextBase = styled.div
`
  position: absolute;
  font-family: 'Noto Sans JP Medium';
  font-size: 0.7em;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  padding: 0.5em;
  left: 3%;
  ${media.greaterThan('medium')`
    font-size: 1em;
  `}
  ${media.greaterThan('large')`
    font-size: 1.5em;
  `} 
`

const Text1 = styled(TextBase)
`
  top: 5%;
  font-size: 1em;
  ${media.greaterThan('medium')`
    font-size: 1.5em;
  `}
  ${media.greaterThan('large')`
    font-size: 2em;
  `} 
`

const Text2 = styled(TextBase)
`
  top: 10%;
  ${media.greaterThan('medium')`
    top: 21%;
  `}
`

const Text3 = styled(TextBase)
`
  top: 30%;
  ${media.greaterThan('medium')`
    top: 33%;
  `}
`

const Text4 = styled(TextBase)
`
  top: 35%;
`

function EndorseBanner () {
  const history = useHistory();
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <EndorseBannerContainer>
      <StyledImage src={slider} />
      {
        !isMobileOrTablet && 
        <Text1>
          【#私たちの未来を奪わないで】
        </Text1>
      }
      <Text2>
        日本政府は今すぐ本気の
      </Text2>
      <Text3>
        気候変動対策をとってください
      </Text3>
      {
        isMobileOrTablet ? 
        <Button onClick={() => {window.open(CHANGE_ORG_URL)}}>▶︎ 署名</Button>
        : <Button onClick={() => {window.open(CHANGE_ORG_URL)}}>▶︎ 署名する</Button>
      }
    </EndorseBannerContainer>
  )
}

export default EndorseBanner
