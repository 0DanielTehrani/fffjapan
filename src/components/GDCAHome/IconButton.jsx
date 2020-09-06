import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import Text from '../Text'

const Icon = styled.img
`
  width: 100%;
`

const IconContainer = styled.div
`
  z-index: 1000;
  width: 50px;
  margin-bottom: -50px;
  ${media.greaterThan('medium')`
    width: 90px;
    margin-bottom: -80px;
  `};
`

const Button = styled.button
`
  position: relative;
  border: 0px;
  width: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.greaterThan('medium')`
  `};
  &:hover {
    cursor: pointer;
  }
`

const StyledText = styled(Text)
`
  font-size: 2em;
  ${media.greaterThan('medium')`
    font-size: 3em;
  `};
  ${media.greaterThan('large')`
    font-size: 3.8em;
  `};
  color: ${props => props.color || props.theme.yellow};
  width: 240px;
  margin-left: 0.3em;
`

const TextImageContainer = styled.div
`
  width: 130px;
  ${media.greaterThan('medium')`
    width: 180px;
  `};
`

const TextImage = styled.img
`
  height: 40px;
  ${media.greaterThan('medium')`
    height: 60px;
    width: auto;
  `};
`

const TextsContainer = styled.div
`
  z-index: 1000;
`

const BackgroundBox = styled.div
`
  position: absolute;
  background-color: ${props => props.theme.lime};
  width: 180px;
  height: 60px;
  top: 30%;
  left: 10%; 
  ${media.greaterThan('medium')`
    width: 250px;
    height: 100px;
    top: 30%;
    left: 10%; 
  `};
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
`


function IconButton (props) {
  const { imgSrc, text, textImgSrc } = props
  return (
    <Button {...props}>
      <BackgroundBox />
      <IconContainer>
        <Icon src={imgSrc} />
      </IconContainer>
      <TextsContainer>
        <StyledText bold color={props.textColor}>{text}</StyledText>
        <TextImageContainer>
          <TextImage src={textImgSrc} />
        </TextImageContainer>
      </TextsContainer>
    </Button>
  )
}

export default IconButton
