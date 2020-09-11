import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Text from '../../components/Text'

const StyledBox = styled.div
`
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

const BoxTitle = styled(Text)
`
  display: block;
`

const UpperContainer = styled.div
``

const LowerContainer = styled.div
``

const BodyContainer = styled.div
``

function Box (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const { imgSrc, boxTitle, text  } = props
  return (
    <StyledBox>
      <UpperContainer>
        <BoxTitle>{boxTitle}</BoxTitle>
        <TextContainer>{text}</TextContainer>
      </UpperContainer>
      <LowerContainer>
        <ImageContainer>
          <Image src={imgSrc} />
        </ImageContainer>
        <BodyContainer>{props.children}</BodyContainer>
      </LowerContainer>
    </StyledBox>
  )
}

export default Box
