import React from 'react'
import styled from 'styled-components'
import LinkItem from '../../LinkItem'
import { ORGANIZE_GOOGLE_FORM_URL } from '../../../constants'

const StyledToOrganizeFormButton = styled.button`
  display: inline-block;
  font-size: 1.375em;
  width: 9.68em;
  height: 2.27em;
  background-color: ${props => props.theme.ocher};
  color: ${props => props.theme.blue};
  border: 0px;
  border-radius: 2.2em;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
  };
`

function ToOrganizeFormButton (props) {
  return (
    <StyledToOrganizeFormButton {...props} onClick={() => { window.open(ORGANIZE_GOOGLE_FORM_URL) }}>応募フォームへ</StyledToOrganizeFormButton>
  )
}

export default ToOrganizeFormButton
