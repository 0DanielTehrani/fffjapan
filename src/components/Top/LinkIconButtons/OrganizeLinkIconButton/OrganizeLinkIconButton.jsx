import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { useTranslation } from 'react-i18next';
import LinkIconButton from '../../../LinkIconButton';
import iconSrcWebp from './organize.webp';
import iconSrc from './organize.png';
import textImageSrcWebp from './organize-text.webp';
import textImageSrc from './organize-text.png';
import { withTheme } from 'styled-components';

function OrganizeLinkIconButton (props) {
  const webpIsSupported = isWebpSupported();
  const { t, i18n } = useTranslation();
  return <LinkIconButton
    href='/to-organize-form'
    backgroundColor={props.theme.blue}
    iconSrc={webpIsSupported ? iconSrcWebp : iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text={i18n.language === 'en' ? '' : t('Top.Organize')}
  />
}

export default withTheme(OrganizeLinkIconButton);
