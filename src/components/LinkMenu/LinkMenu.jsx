import React, { useState } from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import LinkItem from '../LinkItem';
import { Bars } from '@styled-icons/fa-solid/Bars';

const StyledBars = styled(Bars)`
  width: 20px;
  color: ${props => props.theme.textColor};
`;

const StyledLinkMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 70%;
  & :not(:first-child) {
    margin-top: 22px;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWhiteCloseButton = styled.span`
  font-size: 0.8em;
  display: block;
  color: #fff;
  border-top: solid 0.1em #fff;
  border-bottom: solid 0.1em #fff;
  background-color: ${props => props.theme.green};
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily};
  width: 100%;
  text-align: center;
`;

const StyledCloseButtonContainer = styled.div`
  margin-top: 22px;
  font-size: ${props => props.fontSize};
  width: 100%;
`;

function LinkMenu (props) {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleBarsClick = () => {
    setMenuExpanded(true);
  }

  const handleClose = () => {
    setMenuExpanded(false);
  }

  const { fontSize } = props;

  const { t } = useTranslation();

  return (
    <>
      <StyledBars onClick={handleBarsClick} />
      <StyledModal
        open={menuExpanded}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <StyledLinkMenu>
          {props.children}
          <StyledCloseButtonContainer fontSize={fontSize} >
            <StyledWhiteCloseButton onClick={handleClose}>{t('Header.Close')}</StyledWhiteCloseButton>
          </StyledCloseButtonContainer>
        </StyledLinkMenu>
      </StyledModal>
    </>
  )
}

export default LinkMenu;
