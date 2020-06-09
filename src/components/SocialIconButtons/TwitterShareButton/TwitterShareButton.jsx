import React from 'react'
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle'
import styled from 'styled-components'

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

const StyledTwitterWithCircle = styled(TwitterWithCircle)`
  color: ${props => props.theme.green};
`

function TwitterShareButton (props) {
  return (
    <StyledButton onClick={props.onClick} target='_blank'>
      <StyledTwitterWithCircle width={props.width}/>
    </StyledButton>
  )
}

export default TwitterShareButton
