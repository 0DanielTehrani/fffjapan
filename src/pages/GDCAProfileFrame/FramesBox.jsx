import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import ImageWithButton from './ImageWithButton'
import frameA from './frames/gdca-frame-a.png'

const ImageWithButtonContainer = styled.div
`
  ${media.lessThan('medium')`
    margin: 20px 0;
  `};
`

const StyledFramesBox = styled.div
`
  background-color: ${props => props.theme.beige};
  padding: 60px;
  display: flex;
  flex-direction: row;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
  justify-content: space-between;
`


function FramesBox (props) {
  return (
    <StyledFramesBox>
      <ImageWithButtonContainer>
        <ImageWithButton imgSrc={frameA} frameURL='' />
      </ImageWithButtonContainer>
      <ImageWithButtonContainer>
        <ImageWithButton imgSrc={frameA} frameURL='' />
      </ImageWithButtonContainer>
      <ImageWithButtonContainer>
        <ImageWithButton imgSrc={frameA} frameURL='' />
      </ImageWithButtonContainer>
      <ImageWithButtonContainer>
        <ImageWithButton imgSrc={frameA}  frameURL=''/>
      </ImageWithButtonContainer>
    </StyledFramesBox>
  )
}

export default FramesBox
