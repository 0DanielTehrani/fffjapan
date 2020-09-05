import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../Text'
import GDCADivider from './GDCADivider'
import imgSrc from './images/climate-action.png'
import imgSrc2 from './images/footer.png'

const StyledGDCAFooter = styled.div
`
  margin-bottom: 100px;
`

const Title = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 20px;
`

const Row = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    align-items: center;
  `}
`

const Image1 = styled.img
`
  width: 150px;
  height: auto;
  margin-top: 40px;
  ${
    media.greaterThan('medium')
    `
    width: 300px;
    height: auto;
    `
  }
`

const Image2 = styled.img
`
  width: 300px;
  height: auto;
`


function GDCAFooter (props) {
  return (
    <StyledGDCAFooter>
      <Row>
        <Image1 src={imgSrc2} />
        <Image2 src={imgSrc} />
      </Row>
      <GDCADivider />
    </StyledGDCAFooter>
  )
}

export default GDCAFooter
