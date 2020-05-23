import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Text from '../../Text';

const StyledVideoTitle = styled.div`
  text-align: center;
`;

const StyledRow1 = styled(Text)`
  display: block;
  font-size: 1.5em;
`;

const StyledRow2 = styled(Text)`
  display: block;
  font-size: 2em;
`;


function VideoBTitle () {
  const { t } = useTranslation();

  return (
    <StyledVideoTitle>
      <StyledRow1>{t('Top.VideoBTitleRow1')}</StyledRow1>
      <StyledRow2>{t('Top.VideoBTitleRow2')}</StyledRow2>
    </StyledVideoTitle>
  )
}

export default VideoBTitle;
