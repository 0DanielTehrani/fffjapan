import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'

const StyledImageWithButton = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div
`
  margin-bottom: 20px;
`

const Image = styled.img
`
  width: 160px;
`

const StyledText = styled(Text)
`
  color: ${props => props.theme.blue};
`

const Button = styled.button
`
  display: block;
  background-color: ${props => props.theme.lime};
  border: 0;
  padding: 15px 25px;
  &:hover {
    cursor: pointer;
  }
`



function ImageWithButton (props) {
  const { imgSrc, frameURL } = props
  return (
    <a href={frameURL}>
    <StyledImageWithButton>
      <ImageContainer>
        <Image src={imgSrc}/>
      </ImageContainer>
      <Button><StyledText bold>フレームをつける</StyledText></Button>
    </StyledImageWithButton>
    </a>
  )
}

export default ImageWithButton
