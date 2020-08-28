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
  width: 40px;
  ${media.greaterThan('medium')`
    width: 60px;
  `};
`

const Button = styled.button
`
  background-color: ${props => props.theme.lime};
  border: 0px;
  padding: 1em;
  padding-left: 2em;
  padding-right: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.greaterThan('medium')`
    padding: 2em;
    padding-left: 3em;
    padding-right: 6em;
  `};
  &:hover {
    cursor: pointer;
  }
`

const StyledText = styled(Text)
`
  font-size: 1.5em;
  color: ${props => props.color || props.theme.yellow};
  width: 240px;
`

const TextImageContainer = styled.div
`
  width: 150px;
  ${media.greaterThan('medium')`
    width: 200px;
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
  margin-left: 1em;
`


function IconButton (props) {
  const { imgSrc, text, textImgSrc } = props
  return (
    <Button {...props}>
      <IconContainer>
        <Icon src={imgSrc} />
      </IconContainer>
      <TextsContainer>
        <StyledText color={props.textColor}>{text}</StyledText>
        <TextImageContainer>
          <TextImage src={textImgSrc} />
        </TextImageContainer>
      </TextsContainer>
    </Button>
  )
}

export default IconButton
