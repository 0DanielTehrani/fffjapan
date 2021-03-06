import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../Text'
import { Link } from 'react-router-dom'
import { RightArrowCircle } from '@styled-icons/boxicons-regular/RightArrowCircle'

const StyledUpdateNotificationList = styled.div`
  width: 80%;
  margin: 0 auto;
`

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`

const Image = styled.img`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || 'auto'};
`

const LeftContainer = styled.div`
margin: 0 2em;
`

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2em;
`

const RightBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8em;
`

const ListItemTitle = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  text-align: left;
`

const ReadMoreButtonContainer = styled.div`
  position: relative;
  margin-right: 1.9em;
  text-align: right;
  margin-top: 0.3em;
`

const DateText = styled(Text)`
  color: #000;
  font-size: 0.8em;
`

const ReadMoreButton = styled(RightArrowCircle)`
  display: inline-block;
  width: 2em;
  color: ${props => props.theme.green};
  position: absolute;
  ${media.lessThan('medium')`
    position: relative;
  `}
  bottom: 0;
`

const Divider = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid black;
  width: 100%;
  opacity: 0.5;
`

const TitleAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`

const TitleContainer = styled.div`
  margin-right: 1em;
  text-align: left;
  display: flex;
  flex-direction: column;
`

const DateContainer = styled.div`
  width: 100%;
  text-align: left;
  margin: 0.8em 0;
`

const ReadMoreContainer = styled.div
`
  margin-top: 40px;
  text-align: right;
`

const ReadMore = styled(Text)
``

function UpdateNotificationList (props) {
  const {
    only5
  } = props
  
  return (
    <StyledUpdateNotificationList>
      <Divider variant="inset" />
      <ListItem>
        <DateContainer>
          <DateText>2020/12/11</DateText>
        </DateContainer>
        <TitleAndButtonContainer>
          <TitleContainer>
            <ListItemTitle>国民会議開催に伴い、若者が「1.5℃目標の実現と国民を巻き込んだ公正な議論」を求める署名を政府に提出</ListItemTitle>
          </TitleContainer>
          <ReadMoreButtonContainer><Link to='/press-release-201211'><ReadMoreButton /></Link></ReadMoreButtonContainer>
        </TitleAndButtonContainer>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <DateContainer>
          <DateText>2020/11/11</DateText>
        </DateContainer>
        <TitleAndButtonContainer>
          <TitleContainer>
            <ListItemTitle>世界気候アクション0925振り返りページを公開</ListItemTitle>
          </TitleContainer>
          <ReadMoreButtonContainer><Link to='/gdca-recap'><ReadMoreButton /></Link></ReadMoreButtonContainer>
        </TitleAndButtonContainer>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <DateContainer>
          <DateText>2020/10/26</DateText>
        </DateContainer>
        <TitleAndButtonContainer>
          <TitleContainer>
            <ListItemTitle>菅首相による2050年温室効果ガス実質ゼロ目標の宣言に際してのコメント</ListItemTitle>
          </TitleContainer>
          <ReadMoreButtonContainer><Link to='/press-release-201026'><ReadMoreButton /></Link></ReadMoreButtonContainer>
        </TitleAndButtonContainer>
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <DateContainer>
          <DateText>2020/09/25</DateText>
        </DateContainer>
        <TitleAndButtonContainer>
          <TitleContainer>
            <ListItemTitle>メディア向け：若者が世界150カ国以上3500カ所で「世界気候アクション0925」を行い、<br /> 日本でも32都道府県75カ所で様々なイベントが開催 <br />全国統一シューズアクションを開催し約1800足の靴が集まる</ListItemTitle>
          </TitleContainer>
          <ReadMoreButtonContainer><Link to='/press-release-gdca'><ReadMoreButton /></Link></ReadMoreButtonContainer>
        </TitleAndButtonContainer>
      </ListItem>
      
      <Divider variant="inset" />
      <ListItem>
        <DateContainer>
          <DateText>2020/08/27</DateText>
        </DateContainer>
        <TitleAndButtonContainer>
          <TitleContainer>
            <ListItemTitle>世界気候アクション0925：危機管理ガイドラインを掲載</ListItemTitle>
          </TitleContainer>
          <ReadMoreButtonContainer><Link to='/gdca-crisis-management'><ReadMoreButton /></Link></ReadMoreButtonContainer>
        </TitleAndButtonContainer>
      </ListItem>
    
      <Divider variant="inset" />
      
      
      {
        only5 && <ReadMoreContainer>
          <Link to="archives">
            <ReadMore>もっとみる</ReadMore>
          </Link>
        </ReadMoreContainer>
      }
      {
        !only5 &&
        <>
        <ListItem>
          <DateContainer>
            <DateText>2020/08/21</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>若者からエネルギー政策の大転換を求める声明文の提出</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/press-release-200821'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>
        
        <Divider variant="inset" />
        <ListItem>
          <DateContainer>
            <DateText>2020/08/21</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>責任ある気候変動対策・エネルギー政策を求める若者の声明</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/statement-2020-08-21'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>
        
        <Divider variant="inset" />
        <ListItem>
          <DateContainer>
            <DateText>2020/08/21</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>世界気候アクション0925：アクションモデルガイドライン、参加者の心得を掲載</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/gda-application-form'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>
        <Divider variant="inset" />
        <ListItem>
          <DateContainer>
            <DateText>2020/08/21</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>世界気候アクション0925：What do we want? 私たちが求めること</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/gdca-demand'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>
        <Divider variant="inset" />
        
        <ListItem>
          <DateContainer>
            <DateText>2020/06/26</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>若者、小泉環境大臣とのコロナ後の経済社会の再設計に関する意見交換会に出席</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/press-release-200626'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>

        <Divider variant="inset" />

        <ListItem>
          <DateContainer>
            <DateText>2020/06/26</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>コロナ後の経済社会の再設計に関する意見交換会に際する意見書</ListItemTitle>
              <ListItemTitle>グリーンリカバリーについて</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/opinion-200626'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>

        <Divider variant="inset" />

        <ListItem>
          <DateContainer>
            <DateText>2020/06/23</DateText>
          </DateContainer>
          <TitleAndButtonContainer>
            <TitleContainer>
              <ListItemTitle>現役大学生4人が気候変動の要因を生み出す銀行に物申す石炭火力発電事業に加担するメガバンク株主総会に参加！</ListItemTitle>
            </TitleContainer>
            <ReadMoreButtonContainer><Link to='/press-release-200623'><ReadMoreButton /></Link></ReadMoreButtonContainer>
          </TitleAndButtonContainer>
        </ListItem>

        <Divider variant="inset" />
        </>
      }
      
    </StyledUpdateNotificationList>
  )
}

export default UpdateNotificationList
