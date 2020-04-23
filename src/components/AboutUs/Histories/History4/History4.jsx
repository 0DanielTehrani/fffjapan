import React from 'react';
import styled from 'styled-components';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import img1Wep from './history-4-1.webp';
import img2Wep from './history-4-2.webp';
import img3Wep from './history-4-3.webp';
import img1 from './history-4-1.png';
import img2 from './history-4-2.png';
import img3 from './history-4-3.png';

const StyledHistory4 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
`;

const StyledImagesContainer = styled.div`
  margin-bottom: -23.25em;
  z-index: 2;
  margin-left: -2.5em;
  ${media.lessThan('small')`
    margin-left: auto;
    margin-right: auto;
  `};
`;

const StyledLargeImage = styled.img`
  width: 32.5em;
  height: auto;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const ImageContainer = styled.div``;

const StyledSmallImage = styled.img`
  width: 15.93em;
  height: auto;
  ${media.lessThan('small')`
    width: 43vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;


const StyledSmallImagesContainer = styled.div`
  margin-top: 0.75em;
  display: flex;
  & > :nth-child(1) {
    margin-right: 0.35em;
  }
  & > :nth-child(2) {
    margin-left: 0.35em;
  }
`;

function History4 () {
  const title = '各地に広がるムーブメント \n ついに5000人のアクションへ';
  const mainText = 'そこから徐々に名古屋、福岡、那須などにも \
  FridaysForFutureのムーブメントが広がりました。9月20日に世界同時に行ったグローバル気候マーチでは、\
  全国各地24の都道府県と27箇所で計5000人が参加しました。';
  const dateText = '2019.9.20';

  const useWebp = isWebpSupported();

  return (
    <StyledHistory4>
      <StyledImagesContainer>
        <ImageContainer><StyledLargeImage src={useWebp ? img1Wep : img1} /></ImageContainer>
        <StyledSmallImagesContainer>
          <ImageContainer><StyledSmallImage src={useWebp ? img2Wep : img2} /></ImageContainer>
          <ImageContainer><StyledSmallImage src={useWebp ? img3Wep : img3} /></ImageContainer>
        </StyledSmallImagesContainer>
      </StyledImagesContainer>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='4'
        paddingTop='25.75em'
        alignDateTextBottom
      />
    </StyledHistory4>
  )
}

export default History4;
