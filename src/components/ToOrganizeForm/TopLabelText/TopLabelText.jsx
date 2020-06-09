import React from 'react'
import styled, { withTheme } from 'styled-components'
import LabelText from '../../LabelText'

const StyledTopLabelText = styled.div`
  & :not(:first-child) {
    margin-top: 0.28em;
  }
`

const LabelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2.25em;
`

function TopLabelText (props) {
  return (
    <StyledTopLabelText {...props}>
      <LabelTextContainer>
        <LabelText color={props.theme.blue}>もっと深く</LabelText>
        <LabelText color={props.theme.blue}>FFFの活動に</LabelText>
        <LabelText color={props.theme.blue}>関わりたい!</LabelText>
      </LabelTextContainer>
    </StyledTopLabelText>
  )
}

export default withTheme(TopLabelText)
