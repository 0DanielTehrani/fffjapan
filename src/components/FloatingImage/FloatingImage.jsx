import React from 'react'
import styled from 'styled-components'

const StyledFloatingImageContainer = styled.div`
  width: ${props => props.containerWidth};
  top: ${props => props.top};
  text-align: right;
  position: fixed;
  z-index: 10;
`

const StyledFloatingImage = styled.img`
  width: ${props => props.width};
`

function FloatingImage (props) {
  return (
    <StyledFloatingImageContainer containerWidth={props.containerWidth} top={props.top}>
      <StyledFloatingImage {...props} />
    </StyledFloatingImageContainer>
  )
}

export default FloatingImage
