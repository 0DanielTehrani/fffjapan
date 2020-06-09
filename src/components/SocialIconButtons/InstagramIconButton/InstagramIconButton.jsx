import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '../../SocialIcons/InstagramIcon'

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  &:focus {
    outline:0;
  }
  &:hover {
    cursor: pointer;
  }
`

function InstagramIconButton (props) {
  return (
    <StyledButton onClick={props.onClick} target='_blank'>
      <InstagramIcon width={props.width}/>
    </StyledButton>
  )
}

export default InstagramIconButton
