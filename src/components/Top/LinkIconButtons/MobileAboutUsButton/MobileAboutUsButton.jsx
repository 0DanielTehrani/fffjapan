import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import AboutUsText from '../../../RandomImages/AboutUsText';
import Earth from '../../../RandomImages/Earth';
import Text from '../../../Text'

const StyleAboutUsLinkIconButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.green};
  width: 100%;
  border: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledText = styled(Text)`
  display: block;
  color: ${props => props.theme.yellow};
  font-size: 15px;
`;

const LeftContainer = styled.div`
  margin-right: 2em;
  margin-left: 2em;
`;

const RigthContainer = styled.div`
  margin-right: 4em;
  width: 150px;
`;

const TextContainer = styled.div`
`;

function MobileAboutUsButton (props) {
  const { t, i18n } = useTranslation();
  return (
  <StyleAboutUsLinkIconButton onClick={() => { props.history.push('/about-us')}}>
    <LeftContainer>
      <Earth width='90px'/>
    </LeftContainer>
    <RigthContainer>
      <TextContainer>
        <AboutUsText  width='100px'/>
      </TextContainer>
      <StyledText>{i18n.language === 'en' ? '' : t('Top.About Us')}</StyledText>
    </RigthContainer>
  </StyleAboutUsLinkIconButton>)
}

export default withRouter(MobileAboutUsButton);
