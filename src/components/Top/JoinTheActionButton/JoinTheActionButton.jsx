import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { DIGITAL_MARCH_URL } from '../../../constants';
import iconWebp from './fffj-join-us.webp';
import icon from './fffj-join-us.png';
import LinkButton from './LinkButton';

const StyledJoinTheActionButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 13em;
  height: 4.54em;
  background-color: ${props => props.backgroundColor || props.theme.red};
  border-radius: 2.2em;
  border: 0px;
  font-size: 1em;
`;

const StyledButtonIconContainer = styled.div`
  margin-left: 1.22em;
`;

const StyledButtonIcon = styled.img`
  width: 3.45em;
`;

const StyledButtonTextContainer = styled.div`
  margin-left: 0.74em;
`;

const StyledButtonText = styled.span`
  font-size: 1em;
  color: ${props => props.theme.yellow || props.color};
  display: block;
  font-family: ${props => props.theme.fontFamily};
`;

function JoinTheActionButton (props) {
  return (
    <LinkButton target='_blank' href={DIGITAL_MARCH_URL} zIndex={props.zIndex}>
      <StyledJoinTheActionButton {...props}>
        <StyledButtonIconContainer>
          <StyledButtonIcon src={isWebpSupported() ? iconWebp : icon}/>
        </StyledButtonIconContainer>
        <StyledButtonTextContainer>
          <StyledButtonText>アクションに</StyledButtonText>
          <StyledButtonText>参加する</StyledButtonText>
        </StyledButtonTextContainer>
      </StyledJoinTheActionButton>
    </LinkButton>
  )
}

export default JoinTheActionButton;
