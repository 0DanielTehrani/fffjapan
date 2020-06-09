import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import OrganizeText from '../../../RandomImages/OrganizeText'
import Organize from '../../../RandomImages/Organize'
import Text from '../../../Text'

const StyleMobileOrganizeButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.blue};
  width: 100%;
  border: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

const StyledText = styled(Text)`
  color: ${props => props.theme.yellow};
  font-size: 15px;
`

const LeftContainer = styled.div`
  margin-right: 2em;
  margin-left: 2em;
`

const RigthContainer = styled.div`
  margin-right: 2em;
  width: 150px;
`

const TextContainer = styled.div`
`

function MobileOrganizeButton (props) {
  const { t, i18n } = useTranslation()
  return (
    <StyleMobileOrganizeButton onClick={() => { props.history.push('/to-organize-form') }}>
      <LeftContainer>
        <Organize width='90px'/>
      </LeftContainer>
      <RigthContainer>
        <TextContainer>
          <OrganizeText width='100px'/>
        </TextContainer>
        <StyledText>{i18n.language === 'en' ? '' : t('Top.Organize')}</StyledText>
      </RigthContainer>
    </StyleMobileOrganizeButton>)
}

export default withRouter(MobileOrganizeButton)
