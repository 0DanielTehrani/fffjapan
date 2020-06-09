import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { VIDEO_A_URL } from '../../../constants'

const StyledWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
  margin: auto;
`

function Video () {
  return (
    <StyledWrapper>
      <StyledReactPlayer
        url={VIDEO_A_URL}
        controls
        width='80%'
        height='80%'
      />
    </StyledWrapper>
  )
}

export default Video
