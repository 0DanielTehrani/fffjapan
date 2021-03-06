import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import { useTranslation } from 'react-i18next'
import LinkIconButton from '../../../LinkIconButton'
import iconSrcWebp from './about-us.webp'
import iconSrc from './about-us.png'
import textImageSrcWebp from './about-us-text.webp'
import textImageSrc from './about-us-text.png'
import { withTheme } from 'styled-components'

function AboutUsLinkIconButton (props) {
  const webpIsSupported = isWebpSupported()
  const { t, i18n } = useTranslation()
  return <LinkIconButton
    href='/about-us'
    backgroundColor={props.theme.green}
    iconSrc={webpIsSupported ? iconSrcWebp : iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text={i18n.language === 'en' ? '' : t('Top.About Us')}
  />
}

export default withTheme(AboutUsLinkIconButton)
