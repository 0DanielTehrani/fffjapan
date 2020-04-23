import React from 'react';
import styled from 'styled-components';
import TextBoard from '../../TextBoard';
import Text from '../../Text';
import { Link } from 'react-router-dom';

const StyledApproachToGovernmentsBoard = styled.div`
`;

const StyledTitle = styled(Text)`
  text-decoration: underline;
  font-size: 1.375em;
  margin-bottom: 2em
`;

const TextContainer = styled.div`
  margin-top: 2em;
`;

function ApproachToGovernmentsBoard (props) {
  return (
    <StyledApproachToGovernmentsBoard>
      <TextBoard>
        <StyledTitle>行政・政治へのアプローチ</StyledTitle>
        <TextContainer>
          <Text>私たちは、マーチによる間接的なアプローチだけでなく、
          行政や政治への働きかけなど直接的なアプローチも行っています。
          詳しくは<u><Link to='/approach-to-governments'>こちらのページ</Link></u>をご覧ください。</Text>
        </TextContainer>
      </TextBoard>
    </StyledApproachToGovernmentsBoard>
  )
}

export default ApproachToGovernmentsBoard;
