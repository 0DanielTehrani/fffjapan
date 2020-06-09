import React from 'react'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import styled from 'styled-components'
import FloatingImage from '../../FloatingImage'
import imgWebp from './about-us-text.webp'
import img from './about-us-text.png'

function FloatingAboutUsImage (props) {
  return <FloatingImage src={isWebpSupported() ? imgWebp : img} width='9.81em' {...props}/>
}

export default FloatingAboutUsImage
