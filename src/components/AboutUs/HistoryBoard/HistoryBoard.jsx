import React from 'react'
import styled from 'styled-components'

const StyledHistoryBoard = styled.div`
  font-size: 1em;
  background-color: ${props => props.theme.beige};
  padding-top: ${props => props.paddingTop || '1.25em'};
  padding-bottom: ${props => props.paddingBottom || '1.25em'};
  padding-right: 3.125em;
  padding-left: 3.125em;
  display: inline-block;
  max-width: 26.875em;
`

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
`

const StyledDateText = styled.div`
  font-size: 0.875em;
  font-family: ${props => props.theme.fontFamily};
  text-align: right;
  margin-right: -1.875em;
  text-decoration: underline;
`

const StyledHistoryCountContainer = styled.div`
  display: inline-block;
  text-align: center;
`

const StyledHistoryText = styled.div`
  font-size: 0.75em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
`

const StyledCountText = styled.span`
  display: inline-block;
  font-size: 2.12em;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.textColor};
  border-bottom: solid 0.06em ${props => props.theme.textColor};
  width: 1.4em;
  text-align: center;
`

const StyledTitle = styled.div`
  display: inline-block;
  font-size: 1.375em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  white-space: pre-line;
  margin-left: 0.81em;
`

const StyledText = styled.div`
  font-size: 1em;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  margin-top: 1.875em;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
`

function HistoryBoard (props) {
  const { title, mainText, alignDateTextBottom, dateText, countText } = props

  return (
    <StyledHistoryBoard {...props}>
      { !alignDateTextBottom && <StyledDateText>{dateText}</StyledDateText>}
      <StyledHeaderContainer>
        <StyledHistoryCountContainer>
          <StyledHistoryText>history</StyledHistoryText>
          <StyledCountText>{countText}</StyledCountText>
        </StyledHistoryCountContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeaderContainer>
      <StyledText>{mainText}</StyledText>
      { alignDateTextBottom && <StyledDateText>{dateText}</StyledDateText>}
    </StyledHistoryBoard>
  )
}

export default HistoryBoard
