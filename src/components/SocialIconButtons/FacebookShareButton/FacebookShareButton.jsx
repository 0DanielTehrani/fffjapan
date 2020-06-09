import React from 'react'
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle'
import styled from 'styled-components'
import FacebookIcon from '../../SocialIcons/FacebookIcon'

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

const StyledFacebookWithCircle = styled(FacebookWithCircle)`
  color: ${props => props.theme.green};
`

function FacebookIconButton (props) {
  return (
    <StyledButton onClick={props.onClick} target='_blank'>
      <StyledFacebookWithCircle width={props.width} />
    </StyledButton>
  )
}

export default FacebookIconButton
