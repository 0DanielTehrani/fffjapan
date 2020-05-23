import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Text from '../../Text';

const StyledVideoTitle = styled.div`
  text-align: center;
`;

const StyledRow = styled(Text)`
  display: block;
  font-size: 2em;
  height: 2.84375em;
  display: flex;
  align-items: center;
`;

function VideoBTitle () {
  const { t } = useTranslation();

  return (
    <StyledVideoTitle>
      <StyledRow>{t('Top.VideoBTitle')}</StyledRow>
    </StyledVideoTitle>
  )
}

export default VideoBTitle;
