import React from 'react'
import styled from 'styled-components'
import { Swap } from '@styled-icons/entypo/Swap'
import Text from '../../Text'

const StyledLangSwitchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0;
  background-color: #fff;
  font-size: 1em;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

const TextContainer = styled.div`
  display: inline-block;
  margin-left: 0.2em;
  margin-bottom: 0.4em;
`

const StyledSwap = styled(Swap)`
  width: 1.5625em;
  color: ${props => props.theme.green};
`

function LangSwitchButton (props) {
  return (
    <StyledLangSwitchButton onClick={props.onClick}>
      <StyledSwap />
      <TextContainer>
        <Text>{props.currenctLang}</Text>
      </TextContainer>
    </StyledLangSwitchButton>
  )
}

export default LangSwitchButton
