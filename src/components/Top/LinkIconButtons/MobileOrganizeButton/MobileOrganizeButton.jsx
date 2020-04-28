import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import OrganizeText from '../../../RandomImages/OrganizeText';
import Organize from '../../../RandomImages/Organize';
import Text from '../../../Text'

const StyleMobileOrganizeButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.blue};
  width: 185px;
  height: 171px;
  border: 0;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.yellow};
  font-size: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function MobileOrganizeButton (props) {
  const { t } = useTranslation();
  return (
  <StyledLink to='/to-organize-form'><StyleMobileOrganizeButton>
    <Organize width='100px'/>
    <OrganizeText  width='100px'/>
    <StyledText>{t('Top.Organize')}</StyledText>
  </StyleMobileOrganizeButton></StyledLink>)
}

export default MobileOrganizeButton;
