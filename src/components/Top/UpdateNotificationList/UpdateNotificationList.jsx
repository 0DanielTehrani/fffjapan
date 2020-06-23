import React from 'react'
import styled from 'styled-components'
import Text from '../../Text'
import { RightArrowCircle } from '@styled-icons/boxicons-regular/RightArrowCircle'
import pressRelease1 from './press-release.200623.png'

const StyledUpdateNotificationList = styled.div
`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 7em;
`

const ListItem = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1em;
`

const Image = styled.img
`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || 'auto'};
`

const LeftContainer = styled.div
`
margin: 0 2em;
`

const RightContainer = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2em;
`

const RightBottomContainer = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8em;
`

const ListItemTitle = styled.span
`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
`

const ReadMoreButtonContainer = styled.div
`
  padding-right: 0.5em;
`

const DateText = styled(Text)
`
  display: block;
  color: #000;
  font-size: 0.8em;
`

const ReadMoreButton = styled(RightArrowCircle)
`
  display: inline-block;
  width: 2em;
  color: ${props => props.theme.green};
`



const Divider = styled.div
`
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid black;
  width: 100%;
  opacity: 0.5;
`

function UpdateNotificationList() {
  return (
    <StyledUpdateNotificationList>
      <Divider variant="inset" />
      <ListItem>
        <RightContainer>
          <ListItemTitle>
          現役大学生4人が気候変動の要因を生み出す銀行に物申す石炭火力発電事業に加担するメガバンク株主総会に参加！
          </ListItemTitle>
          <RightBottomContainer>
            <DateText>2020/06/23</DateText>
            <ReadMoreButtonContainer>
              <ReadMoreButton />
            </ReadMoreButtonContainer>
          </RightBottomContainer>
        </RightContainer>
      </ListItem>
      <Divider variant="inset" />
    </StyledUpdateNotificationList>
  )
}

export default UpdateNotificationList
