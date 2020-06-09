import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton'
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton'

import Text from '../Text'
import { FACEBOOK_SHARE_URL } from '../../constants'
import { constructTwitterShareURL } from '../utils'

const StyledSidebar = styled.div`
  position: fixed;
  top: 45%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-left: 4em;
`

const TwitterButtonContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`

const FacebookButtonContainer = styled.div`
  margin-top: 1em;
`

const StyledText = styled(Text)`
  display: inline-block;
  margin-bottom: 1em;
  font-size: 1em;
`

function Sidebar (props) {
  const { t } = useTranslation()
  const { pathname } = props.location
  const twitterShareURL = constructTwitterShareURL(t(`Sidebar.ShareText.${pathname}`), window.location.href)

  return (
    <StyledSidebar>
      <StyledText>{t('Sidebar.share')}</StyledText>
      <TwitterButtonContainer>
        <TwitterShareButton
          width='3.2em'
          onClick={() => { window.open(twitterShareURL) }} />
      </TwitterButtonContainer>
      <FacebookButtonContainer>
        <FacebookShareButton
          width='3.2em'
          onClick={() => { window.open(FACEBOOK_SHARE_URL) }}/>
      </FacebookButtonContainer>
    </StyledSidebar>
  )
}

export default withRouter(Sidebar)
