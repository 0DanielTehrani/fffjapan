import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Text from '../../components/Text'

const StyledBox = styled.div
`
  background-color: ${props => props.theme.beige};
`

const ImageContainer = styled.div
``

const Image = styled.img
`
  width: 200px;
`

const TitleContainer = styled.div
`
`

const Title = styled(Text)
`
  color: #000;
  font-size: 1.8rem;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  margin: 0 80px;
`

const StyledText = styled(Text)
`
  color: #000;
`


function Box (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const { imgSrc, text, title } = props
  return (
    <StyledBox>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
      <TextContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <StyledText>{text}</StyledText>
      </TextContainer>
    </StyledBox>
  )
}

export default Box
