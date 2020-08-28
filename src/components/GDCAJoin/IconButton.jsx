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
  background-color: ${props => props.theme.green};
  border: 0px;
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 3em;
  width: 100%;
  ${media.greaterThan('medium')`
    padding: 1em;
    padding-left: 4em;
    padding-right: 6em;
    width: 440px;
  `};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`

const StyledText = styled(Text)
`
  font-size: 1.5em;
  color: ${props => props.theme.yellow};
  width: 240px;
`

function IconButton (props) {
  const { imgSrc, text } = props
  return (
    <Button {...props}>
      <IconContainer>
        <Icon src={imgSrc} />
      </IconContainer>
      <StyledText>{text}</StyledText>
    </Button>
  )
}

export default IconButton
