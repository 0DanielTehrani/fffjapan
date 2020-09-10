import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Text from '../../components/Text'

const StyledEndorse = styled.div
`
  text-align: center;
  margin: 20px 0;
`

const StyledText = styled(Text)
`
  font-size: 22px;
`

function Endorse (props) {
  const { orgName, href } = props
  return (
    <StyledEndorse>
      <a href={href} target='_blank'>
        <StyledText>{orgName}</StyledText>
      </a>
    </StyledEndorse>
  )
}

export default Endorse
