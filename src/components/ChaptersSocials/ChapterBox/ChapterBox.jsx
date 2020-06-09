import React from 'react'
import styled from 'styled-components'
import TextBoard from '../../TextBoard'
import Text from '../../Text'
import TwitterIcon from '../../SocialIcons/TwitterIcon'
import FacebookIcon from '../../SocialIcons/FacebookIcon'
import InstagramIcon from '../../SocialIcons/InstagramIcon'

const StyledChapterBox = styled.div`
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StyledChapterName = styled(Text)`
  font-size: 1.5em;
  margin-right: 2em;
`

const SocialIconContainer = styled.div`
  display: inline-block;
  margin-left: 1em;
`

function ChapterBox (props) {
  const { name, twitter, facebook, instagram } = props
  return (
    <StyledChapterBox>
      <StyledChapterName>{name}</StyledChapterName>
      <SocialIconContainer><TwitterIcon width='2.5em'/></SocialIconContainer>
      <SocialIconContainer><FacebookIcon width='2.5em'/></SocialIconContainer>
      <SocialIconContainer><InstagramIcon width='2.5em'/></SocialIconContainer>
    </StyledChapterBox>
  )
}

export default ChapterBox
