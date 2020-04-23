import React from 'react';
import styled from 'styled-components';
import TextBoard from '../../TextBoard';
import Text from '../../Text';

const TitleContainer = styled.div`
  margin-bottom: 2.5em;
`;

const StyledTopBoard = styled.div`
`;

function TopBoard (props) {
  return (
    <StyledTopBoard {...props}>
      <TextBoard>
        <TitleContainer><Text fontSize='1.45em' bold underline>行政・政治へのアプローチ</Text></TitleContainer>
        <Text fontSize='1em'>私たちFridays For Future（以下、FFF）は日本の気候変動政策を強化するため、
        マーチによる間接的なアプローチだけでなく、行政や政治への働きかけなどの直接的なアプローチも行っています
        。例えば、各地域のFFFが各地方自治体に対して気候非常事態宣言の発表を求めたり、
        行政の職員さんや議員さんとの意見交換などを行っています。
        このページでは各地のそんな動きを紹介します。</Text>
      </TextBoard>
    </StyledTopBoard>
  )
}

export default TopBoard;
