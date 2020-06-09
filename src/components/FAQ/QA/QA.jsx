import React from 'react';
import styled from 'styled-components';
import Callout from '../Callout';
import TextBoard from '../../TextBoard';
import Avatar from '../Avatar';

const StyledQA = styled.div`
  font-size: 1em;
`;

const QContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -5em;
`;

const AvatarContainer = styled.div`
  margin-left: -1.25em;
`;

const CalloutContainer = styled.div`
  margin-right: -1.25em;
  margin-left: 1.8em;
`;

function QA (props) {
  const { answer, question, avatarType, color } = props;
  return (
    <StyledQA>
      <QContainer>
        <AvatarContainer><Avatar avatarType={avatarType} /></AvatarContainer>
        <CalloutContainer><Callout color={color}>{question}</Callout></CalloutContainer>
      </QContainer>
      <TextBoard paddingTop='7.87em'>{answer}</TextBoard>
    </StyledQA>
  )
}

export default QA;
