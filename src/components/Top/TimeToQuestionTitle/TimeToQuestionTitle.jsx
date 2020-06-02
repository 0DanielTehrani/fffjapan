import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Text from '../../Text';

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

const Row1 = styled(Text)`
  text-align: center;
  font-size: 2em;
  white-space: pre;
`;

const Row2 = styled(Text)`
  text-align: center;
  font-size: 2em;
  white-space: pre;
`;


function TimeToQuestionTitle () {
  const { t } = useTranslation();

  return (
    <StyledTitle>
      <Row1>{t('Top.TimeToQuestionRow1')}</Row1>
      <Row2>{t('Top.TimeToQuestionRow2')}</Row2>
    </StyledTitle>
  )
}

export default TimeToQuestionTitle;
