import React from 'react';
import styled from 'styled-components';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import imgWebp from './history-6.webp';
import img from './history-6.png';

const StyledHistory6 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-left: -4.5em;
  margin-top: -16.75em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;
function History6 () {
  const { t } = useTranslation();
  const title = t('About Us.History6_Title');
  const mainText = t('About Us.History6');
  const dateText = '2020.2.24';

  return (
    <StyledHistory6>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='6'
        paddingBottom='19.25em'
      />
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
    </StyledHistory6>
  )
}

export default History6;
