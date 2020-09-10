import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'

const StyledDownloadButton = styled.button
`
  background-color: blue;
  border: 0;
  padding: 20px 40px;
  &:hover {
    cursor: pointer;
  }
`

const StyledText = styled(Text)
`
  color: ${props => props.theme.lime};
`

function DownloadButton (props) {
  const { href, text } = props
  return (
    <a href={href} download>
      <StyledDownloadButton>
        <StyledText bold>{text}</StyledText>
      </StyledDownloadButton>
    </a>
  )
}

export default DownloadButton
