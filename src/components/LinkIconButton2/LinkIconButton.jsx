import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const StyledLinkIconButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: ${props => props.backgroundColor};
`;

const StyledIcon = styled.img`
  width: 5em;
`;

const StyledTextImage = styled.img`
  height: 2.96em;
`;

const StyledText = styled.span`
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.yellow};
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const RigthContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4em;
`;

const TextContainer = styled.div`
`;

const StyledButton = styled.button`
`;

function LinkIconButton (props) {
  return (
    <StyledLinkIconButton backgroundColor={props.backgroundColor} onClick={() => {props.history.push(props.href)}}>
      <LeftContainer>
        <StyledIcon src={props.iconSrc}/>
      </LeftContainer>
      <RigthContainer>
        <TextContainer>
          <StyledTextImage src={props.textImageSrc}/>
        </TextContainer>
        <StyledText>{props.text}</StyledText>
      </RigthContainer>
    </StyledLinkIconButton>
  )
}

export default withRouter(LinkIconButton);
