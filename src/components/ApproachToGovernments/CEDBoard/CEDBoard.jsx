import React from 'react';
import styled from 'styled-components';
import TextBoard from '../../TextBoard';
import Text from '../../Text';
import { MUNICIPALITY_CED_LIST, ZERO_CARBON_CITY_LIST } from '../../../constants';

const TitleContainer = styled.div`
  margin-bottom: 2.5em;
`;

const StyledCEDBoard = styled.div`
`;

function CEDBoard (props) {
  return (
    <StyledCEDBoard>
      <TextBoard>
        <TitleContainer><Text fontSize='1.625em' bold underline>気候非常事態宣言とは</Text></TitleContainer>
        <Text fontSize='1em'>「気候非常事態宣言」とは、「気候変動を最大の脅威と捉え、
          政策的に取り組むべき最優 先の事項である」と、議会が宣言することを指します。
          気候変動や異常気象が急速に進む中で、地方議会ごとにその危機的状況を共有し、
          「2050年温室効果ガス排出量実質ゼロ」などの具体的な目標を盛り込んで宣言します。
          「宣言」という形をとることで、行政側が気候変動対策への緊急性を認め、
          市民にその危険性を知らせるという意図があります。
          また、議会が採択し宣言することで、その後首長が変わってもその宣言の内容は変わらずその自治体の中で受け継がれます。
          <br />気候非常事態宣言を発表（議会を通過している）した自治体一覧は<u><a href={MUNICIPALITY_CED_LIST} target='_blank' rel="noopener noreferrer">こちら</a></u>
          <br />2050年二酸化炭素排出実質ゼロを首長が宣言（議会は通過していない）した自治体（ゼロカーボンシティ）一覧は<u><a href={ZERO_CARBON_CITY_LIST} target='_blank' rel="noopener noreferrer">こちら</a></u>
        </Text>
      </TextBoard>
    </StyledCEDBoard>
  )
}

export default CEDBoard;
