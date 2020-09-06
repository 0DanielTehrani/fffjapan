import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import ImageWithButton from './ImageWithButton'
import frameA from './frames/gdca-frame-a.png'
import frameB from './frames/gdca-frame-b.png'

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
  justify-content: space-evenly;
`

const imgSrcAndURL = [
  {
    frame: frameA,
    url: 'https://www.facebook.com/profilepicframes/?selected_overlay_id=1438424726348616'
  },
  {
    frame: frameB,
    url: 'https://www.facebook.com/profilepicframes/?selected_overlay_id=953694235107727'
  }
]

function FramesBox (props) {
  return (
    <StyledFramesBox>
      {
        imgSrcAndURL.map((obj) => {
          const { frame, url } = obj
          return  <ImageWithButtonContainer>
            <ImageWithButton imgSrc={frame} frameURL={url} />
          </ImageWithButtonContainer>
        })
      }
    </StyledFramesBox>
  )
}

export default FramesBox
