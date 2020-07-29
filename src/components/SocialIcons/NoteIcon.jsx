import React from 'react'
import styled from 'styled-components'
import noteLogo from './note-symbol.svg'

const StyledNoteIcon = styled.img`
  width: ${props => props.width || '25px'};
  color: ${props => props.color || props.theme.textColor};
`

function NoteIcon (props) {
  return <StyledNoteIcon {...props} src={noteLogo}/>
}

export default NoteIcon
