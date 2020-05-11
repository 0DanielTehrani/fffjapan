import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Text from '../../Text';

const StyledGetInTouchWithChaptersBanner = styled(Text)`
  font-size: 2em;
`;

function GetInTouchWithChaptersBanner () {
  const { t } = useTranslation();

  return (
    <StyledGetInTouchWithChaptersBanner>
      {t('Top.GetInTouchWithAChapter')}
    </StyledGetInTouchWithChaptersBanner>
  )
}

export default GetInTouchWithChaptersBanner;
