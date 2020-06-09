import React from 'react'
import styled, { withTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { useMediaQuery } from 'react-responsive'

import CookieConsent from 'react-cookie-consent'
import Text from '../Text'

const StyledText = styled(Text)`
  font-size: 0.8em;
  margin: 0;
`

function CookieConsentBanner (props) {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  const bannerStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: isMobile ? '0.5em' : '0.5em 10em 0.5em 0px',
    boxShadow: '-4px -6px 14px rgba(179, 177, 177)',
    alignItems: 'center'
  }

  const buttonStyle = {
    backgroundColor: props.theme.beige,
    color: props.theme.green,
    fontSize: '0.8em'
  }

  const contentStyle = {
    margin: '0'
  }

  const { t } = useTranslation()

  return (
    <CookieConsent
      style={bannerStyle}
      buttonText='OK'
      buttonStyle={buttonStyle}
      contentStyle={contentStyle}
    >
      <StyledText>{t('CookieConsent.text')}</StyledText>
    </CookieConsent>
  )
}

export default withTheme(CookieConsentBanner)
