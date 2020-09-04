import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import GDCADivider from './GDCADivider'
import imgSRc from './images/top-image.png'


const StyledGDCAExamplePic = styled.img
`
  width: 90%;
  height: auto;
  display: block;
  margin: auto;
  margin-bottom: 24px;
`

function GDCAExamplePic () {
  return (
    <StyledGDCAExamplePic src={imgSRc} />
  )
}

export default GDCAExamplePic
