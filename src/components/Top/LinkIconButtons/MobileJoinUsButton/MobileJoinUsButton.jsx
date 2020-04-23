import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import JoinUsText from '../../../RandomImages/JoinUsText';
import ActNow from '../../../RandomImages/ActNow';
import Text from '../../../Text'
import { DIGITAL_MARCH_URL } from '../../../../constants';

const StyleMobileJoinUsButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.red};
  width: 185px;
  height: 171px;
  border: 0;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.yellow};
  font-size: 15px;
`;

function MobileJoinUsButton (props) {
  return (
  <StyleMobileJoinUsButton onClick={() => {window.open(DIGITAL_MARCH_URL)}}>
    <ActNow width='100px'/>
    <JoinUsText  width='100px'/>
    <StyledText>アクションに参加する</StyledText>
  </StyleMobileJoinUsButton>)
}

export default MobileJoinUsButton;
