import React from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const StyledLinkIconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15.9em;
  height: 15.9em;
  background-color: ${props => props.backgroundColor};
`;

const StyledIcon = styled.img`
  width: 8.63em;
`;

const StyledTextImage = styled.img`
  height: 2.96em;
`;

const StyledText = styled.span`
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.yellow};
`;

function LinkIconButton (props) {
  return (
    <LinkButton href={props.href}>
      <StyledLinkIconButton backgroundColor={props.backgroundColor}>
        <StyledIcon src={props.iconSrc}/>
        <StyledTextImage src={props.textImageSrc}/>
        <StyledText>{props.text}</StyledText>
      </StyledLinkIconButton>
    </LinkButton>
  )
}

export default LinkIconButton;
