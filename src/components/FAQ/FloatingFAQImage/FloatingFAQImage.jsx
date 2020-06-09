import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import FloatingImage from '../../FloatingImage'
import imgWebp from './faq-text.webp'
import img from './faq-text.png'

function FloatingFAQImage (props) {
  return <FloatingImage src={isWebpSupported() ? imgWebp : img} width='6.31em' {...props}/>
}

export default FloatingFAQImage
