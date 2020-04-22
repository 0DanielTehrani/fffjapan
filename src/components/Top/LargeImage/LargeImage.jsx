import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import topImgWebp from './top-image.webp';
import topImg from './top-image.png';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import LabelText from './LabelText';

const StyledLargeImage = styled.div`
  position: relative;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledLabelTextContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 787px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & span:not(:first-child) {
    margin-top: 0.6rem;
  }
  ${media.lessThan('large')`
    top: calc(90px * 950 / 1200);
    left: 550px;
  `}
  ${media.lessThan('medium')`
    top: calc(90px * 700 / 1200);
    left: 320px;
  `}
  ${media.lessThan('small')`
    top: calc(90px * 330 / 1200);
    left: 120px;
  `}
`;

function LargeImage (props) {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });
  const fontSize = isMobile ? '16px' : '32px';

  return (
    <StyledLargeImage>
      <StyledImage src={isWebpSupported() ? topImgWebp : topImg} />
      <StyledLabelTextContainer>
        <LabelText fontSize={fontSize}>気候変動対策の</LabelText>
        <LabelText fontSize={fontSize}>緊急性を伝えるために</LabelText>
        <LabelText fontSize={fontSize}>みんなで声をあげよう!</LabelText>
      </StyledLabelTextContainer>
    </StyledLargeImage>
  )
}

export default LargeImage;
