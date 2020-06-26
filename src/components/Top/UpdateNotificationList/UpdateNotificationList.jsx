import React from 'react'
import styled from 'styled-components'
import Text from '../../Text'
import { Link } from 'react-router-dom'
import { RightArrowCircle } from '@styled-icons/boxicons-regular/RightArrowCircle'
import pressRelease1 from './press-release.200623.png'

const StyledUpdateNotificationList = styled.div
`
  width: 100%;
  margin: 0 auto;
`

const ListItem = styled.div
`
  width: 100%;
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
  width: 100%;
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
  text-align: center;
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
              <Link to='/press-release-200623'><ReadMoreButton /></Link>
            </ReadMoreButtonContainer>
          </RightBottomContainer>
        </RightContainer>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <RightContainer>
          <ListItemTitle>
          若者、小泉環境大臣との
          コロナ後の経済社会の再設計に関する意見交換会に出席
          </ListItemTitle>
          <ListItemTitle>
          ー小泉大臣：政府全体の動きをより脱炭素にー
          </ListItemTitle>
          <RightBottomContainer>
            <DateText>2020/06/26</DateText>
            <ReadMoreButtonContainer>
              <Link to='/press-release-200626'><ReadMoreButton /></Link>
            </ReadMoreButtonContainer>
          </RightBottomContainer>
        </RightContainer>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <RightContainer>
          <ListItemTitle>
          コロナ後の経済社会の再設計に関する意見交換会に際する意見書
          </ListItemTitle>
          <ListItemTitle>
          グリーンリカバリーについて
          </ListItemTitle>
          <RightBottomContainer>
            <DateText>2020/06/26</DateText>
            <ReadMoreButtonContainer>
              <Link to='/opinion-200626'><ReadMoreButton /></Link>
            </ReadMoreButtonContainer>
          </RightBottomContainer>
        </RightContainer>
      </ListItem>
      <Divider variant="inset" />
    </StyledUpdateNotificationList>
  )
}

export default UpdateNotificationList
