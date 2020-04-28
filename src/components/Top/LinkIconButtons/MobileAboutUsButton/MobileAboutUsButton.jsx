import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import AboutUsText from '../../../RandomImages/AboutUsText';
import Earth from '../../../RandomImages/Earth';
import Text from '../../../Text'

const StyleAboutUsLinkIconButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.green};
  width: 185px;
  height: 171px;
  border: 0;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.yellow};
  font-size: 15px;
`;

// TODO: Create a common Link component with no underline.
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function MobileAboutUsButton (props) {
  const { t } = useTranslation();
  return (
  <StyledLink to='/about-us'><StyleAboutUsLinkIconButton>
    <Earth width='100px'/>
    <AboutUsText  width='100px'/>
    <StyledText>{t('Top.About Us')}</StyledText>
  </StyleAboutUsLinkIconButton></StyledLink>)
}

export default MobileAboutUsButton;
