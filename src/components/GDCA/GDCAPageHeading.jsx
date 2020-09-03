import React from 'react'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import Text from '../Text'
import shoes2 from './images/shoes2.png'
import shoes3 from './images/shoes3.png'
import shoes4 from './images/shoes4.png'
import shoes5 from './images/shoes5.png'

const StyledPageHeading = styled.div
`
`

const TextImageContainer = styled.div
`
  width: 300px;
  text-align: center;
  margin: auto;
  margin-bottom: -2.5rem;
  ${media.lessThan('medium')`
    margin-bottom: -1.75rem;
  `}
`

const TextImage = styled.img
`
  width: 100%;
`

const Shoes = styled.img
`
  width: 100%;
`

const ShoesContainer = styled.div
`
  margin: 10px;
  width: 5rem;
  ${media.lessThan('medium')`
    width: 2.5rem;
  `}
`




const Title = styled(Text)
` 
  display: block;
  text-align: center;
  font-size: 2rem;
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
  color: ${props => props.color || props.theme.green};
`

const ShoesAndTitleContainer = styled.div
`
  display: flex;
  flex-direciton: column;
  justify-content: center;
  align-items: center;
`




function PageHeading (props) {
  const { 
    textImgSrc, 
    title, 
    color,
  } = props;
  
  const getShoesImgSrcByColor = (color, theme) => {
    switch (color) {
      case theme.black:
        return shoes2
      case theme.blue:
        return shoes3
      case theme.red:
        return shoes4
      case theme.green:
        return shoes5
      default:
        return shoes2
    }
  }
  
  const shoesImgSrc = getShoesImgSrcByColor(color, props.theme)
  
  return (
    <StyledPageHeading>
      <TextImageContainer><TextImage src={textImgSrc} /></TextImageContainer>
      <ShoesAndTitleContainer>
        <ShoesContainer>
          <Shoes src={shoesImgSrc} />
        </ShoesContainer>
        <Title bold color={color}>{title}</Title>
        <ShoesContainer>
          <Shoes src={shoesImgSrc} />
        </ShoesContainer>
      </ShoesAndTitleContainer>
    </StyledPageHeading>
  )
}

export default withTheme(PageHeading)
