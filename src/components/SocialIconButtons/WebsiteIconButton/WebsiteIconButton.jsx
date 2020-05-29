import React from 'react';
import styled from 'styled-components';
import WebsiteIcon from '../../SocialIcons/WebsiteIcon';

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

function WebsiteIconButton (props) {
  return (
    <StyledButton onClick={props.onClick} target='_blank'>
      <WebsiteIcon width={props.width}/>
    </StyledButton>
  )
}


export default WebsiteIconButton;
