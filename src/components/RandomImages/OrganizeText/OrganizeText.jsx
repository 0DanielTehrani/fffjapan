import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import imgWebp from './organize-text.webp'
import img from './organize-text.png'

const StyledOrganizeText = styled.img`
  width: ${props => props.width || '213px'};
`

function OrganizeText (props) {
  return <StyledOrganizeText src={isWebpSupported() ? imgWebp : img} {...props}/>
}

export default OrganizeText
