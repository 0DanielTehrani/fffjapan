import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../../SocialIcons/TwitterIcon';

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  &:focus {
    outline:0;
  }
  &:hover {
    cursor: pointer;
  }
`;

function TwitterIconButton (props) {
  return (
    <StyledButton onClick={props.onClick} target='_blank'>
      <TwitterIcon width={props.width}/>
    </StyledButton>
  )
}


export default TwitterIconButton;
