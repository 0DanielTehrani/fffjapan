import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../Text'
import GDCADivider from './GDCADivider'
import imgSrc from './images/climate-action.png'

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
``

const Image2 = styled.img
`
  width: 300px;
  height: auto;
`


function GDCAFooter (props) {
  return (
    <StyledGDCAFooter>
      <Row>
        <Title bold>世界気候アクション0925</Title>
        <Image2 src={imgSrc} />
      </Row>
      <GDCADivider />
    </StyledGDCAFooter>
  )
}

export default GDCAFooter
