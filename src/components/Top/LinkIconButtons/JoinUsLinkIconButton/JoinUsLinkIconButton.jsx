import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import LinkIconButton from '../../../LinkIconButton'
import iconSrcWebp from './join-us.webp'
import iconSrc from './join-us.png'
import textImageSrcWebp from './join-us-text.webp'
import textImageSrc from './join-us-text.png'
import { withTheme } from 'styled-components'

function JoinUsLinkIconButton (props) {
  const webpIsSupported = isWebpSupported()
  const { t, i18n } = useTranslation()
  return <LinkIconButton
    href='/actions'
    backgroundColor={props.theme.red}
    iconSrc={webpIsSupported ? iconSrcWebp : iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text={i18n.language === 'en' ? '' : t('Top.Join The Action')}
  />
}

export default withTheme(JoinUsLinkIconButton)
