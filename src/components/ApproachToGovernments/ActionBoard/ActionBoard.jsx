import React from 'react'
import styled from 'styled-components'
import TextBoard from '../../TextBoard'

const TitleContainer = styled.div`
`

const StyledActionBoard = styled.div`
`

const TextContainer = styled.div`
  margin-left: 2em;
`

const StyledTitleContainer = styled.div`
  margin-bottom: 0.8125em;
`

const StyledTitle = styled.span`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  white-space: pre-line;
  font-size: 1.375em;
`

const StyledSubTitle = styled.span`
  font-size: 1em;
  color: ${props => props.theme.ocher};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  text-decoration: underline;
`

const StyledText = styled.span`
  font-size: 1em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  line-height: 1.625em;
  white-space: pre-line;
`

function ActionBoard (props) {
  return (
    <StyledActionBoard>
      <TextBoard>
        <StyledTitleContainer><StyledTitle>{props.title}</StyledTitle></StyledTitleContainer>
        <StyledSubTitle>誰に対して</StyledSubTitle>
        <TextContainer><StyledText>{props.toWhom}</StyledText></TextContainer>
        <StyledSubTitle>どんなことしてる？</StyledSubTitle>
        <TextContainer><StyledText>{props.what}</StyledText></TextContainer>
        <StyledSubTitle>成果は？</StyledSubTitle>
        <TextContainer><StyledText>{props.achievements}</StyledText></TextContainer>
      </TextBoard>
    </StyledActionBoard>
  )
}

export default ActionBoard
