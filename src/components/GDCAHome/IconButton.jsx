import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

const Icon = styled.img
``

const Button = styled.button
``

const StyledText = styled(Text)
``

function IconButton (props) {
  const { imgSrc, text } = props
  return (
    <Button {...props}>
      <Icon />
      <StyledText>{text}</StyledText>
    </Button>
  )
}

export default IconButton
