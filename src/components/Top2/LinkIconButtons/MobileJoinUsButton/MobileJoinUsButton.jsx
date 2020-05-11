import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import JoinUsText from '../../../RandomImages/JoinUsText';
import ActNow from '../../../RandomImages/ActNow';
import Text from '../../../Text'
import { DIGITAL_MARCH_URL } from '../../../../constants';

const StyleMobileJoinUsButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.red};
  width: 100%;
  border: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.yellow};
  font-size: 15px;
`;

const LeftContainer = styled.div`
  margin-right: 2em;
  margin-left: 2em;
`;

const RigthContainer = styled.div`
  margin-right: 2em;
  width: 150px;
`;

const TextContainer = styled.div`
`;

function MobileJoinUsButton (props) {
  const { t } = useTranslation();
  return (
  <StyleMobileJoinUsButton onClick={() => {window.open(DIGITAL_MARCH_URL)}}>
    <LeftContainer>
      <ActNow width='90px'/>
    </LeftContainer>
    <RigthContainer>
      <TextContainer>
        <JoinUsText  width='100px'/>
      </TextContainer>
      <StyledText>{t('Top.Join The Action')}</StyledText>
    </RigthContainer>
  </StyleMobileJoinUsButton>)
}

export default MobileJoinUsButton;
