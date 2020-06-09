import React from 'react'
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import avatar1Webp from './avatar-1.webp'
import avatar2Webp from './avatar-2.webp'
import avatar3Webp from './avatar-3.webp'
import avatar4Webp from './avatar-4.webp'
import avatar1 from './avatar-1.png'
import avatar2 from './avatar-2.png'
import avatar3 from './avatar-3.png'
import avatar4 from './avatar-4.png'

const avatars = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4
}

const avatarsWebp = {
  1: avatar1Webp,
  2: avatar2Webp,
  3: avatar3Webp,
  4: avatar4Webp
}

const StyledAvatar = styled.img`
  width: 6.25em;
`

function Avatar (props) {
  const { avatarType } = props
  return (
    <StyledAvatar src={isWebpSupported() ? avatarsWebp[avatarType] : avatars[avatarType]}/>
  )
}

export default Avatar
