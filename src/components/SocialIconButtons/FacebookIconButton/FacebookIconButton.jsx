import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../SocialIcons/FacebookIcon';

const StyledButton = styled.button`
  background-color: #fff;
  border: 0;
  &:focus {
    outline:0;
  }
  &:hover {
    cursor: pointer;
  }
`;

function FacebookIconButton (props) {
  return (
    <StyledButton href={props.href} target='_blank'>
      <FacebookIcon width={props.width}/>
    </StyledButton>
  )
}


export default FacebookIconButton;
