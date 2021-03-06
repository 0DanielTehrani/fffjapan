import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme }  from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import GDAHeader from '../../components/GDAHeader'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import GDCA1 from '../../components/RandomImages/GDCA1'
import GDCA2 from '../../components/RandomImages/GDCA2'
import IconButton from '../../components/GDCAJoin/IconButton'
import Heading from '../../components/GDAApplicationForm/Heading'
import Heading2 from '../../components/GDAApplicationForm/Heading2'
import GDCAJoinUs from '../../components/RandomImages/GDCAJoinUs'
import GDCAExamplePic from '../../components/GDCA/GDCAExamplePic'
import GDCAFooter from '../../components/GDCA/GDCAFooter'
import shoes2 from './shoes2.png'
import shoes3 from './shoes3.png'
import shoes4 from './shoes4.png'
import shoes5 from './shoes5.png'
import events from './events.png'
import joinOnline from './join-online.png'
import howToJoin from './how-to-join.png'
import profileFrame from './profile-frame.png'
import { 
  Heading1Container,
  Image2Container,
  StyledDivider 
} from '../GDAApplicationForm'

const FooterContainer = styled.div`
  margin-top: 2.5em;
`

const Image1Container = styled.div
`
  width: 125px;
  display: none;
  ${media.greaterThan('medium')
    `
      display: block;
      margin-right: 60px;
    `
  }
`

const StyledGDCAJoin = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

const ButtonsContaienr = styled.div
`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    flex-direction: column;
  `};
  align-items: center;
  justify-content: center;
  margin: 5em 0;
`

const ButtonsColumn = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonsRow = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  ${media.greaterThan('medium')
    `
      flex-direction: row;
    `
  }
`


const ButtonContainer = styled.div
`
      margin: 1em;
`

const LatestInfoTitle = styled(Text)
`
  display: block;
`

const SubscribeContainer = styled.div
`
  text-align: center;
`

const SubscribeButton = styled.button
`
`

const ExamplePicContainer = styled.div
`
  width: 70%;
  margin: auto;
  margin-top: 30px;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`



function GDCAJoin (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const joinUsWidth = isMobileOrTablet ? '330px' : '430px'
  
  return (
    <Page maxWidth='1120px'>
        <GDAHeader />
        <StyledGDCAJoin>
        <Heading1Container>
          <GDCAJoinUs width={joinUsWidth} />
        </Heading1Container>
        <ExamplePicContainer>
          <GDCAExamplePic />
        </ExamplePicContainer>
        <ButtonsContaienr>
          <ButtonsRow>
            <ButtonContainer>
              <HashLink smooth to='gda-application-form#actions-list'>
                <IconButton 
                  text='イベント一覧'
                  imgSrc={shoes3} 
                  textColor={props.theme.blue}
                  textImgSrc={events}
                />
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <Link to='gdca-participants-info'>
                <IconButton 
                  text='参加者の心得'　
                  imgSrc={shoes4} 
                  textColor={props.theme.red}
                  textImgSrc={howToJoin}
                />
              </Link>
            </ButtonContainer>
          </ButtonsRow>
          <ButtonsRow>
            <ButtonContainer>
              <HashLink smooth to='gdca-join-online'>
                <IconButton 
                  text='オンラインで参加' 
                  imgSrc={shoes2} 
                  textImgSrc={joinOnline}
                  textColor={props.theme.black}
                />
              </HashLink>
            </ButtonContainer>
            <ButtonContainer>
              <HashLink smooth to='gdca-profile-frame'>
                <IconButton 
                  text='プロフィールフレーム' 
                  imgSrc={shoes5} 
                  textImgSrc={profileFrame}
                  textColor={props.theme.green}
                />
              </HashLink>
            </ButtonContainer>
          </ButtonsRow>
          <ButtonsRow>
            <ButtonContainer>
              <HashLink smooth to='gdca-sharepack'>
                <IconButton 
                  text='広報素材（チラシなど）' 
                  imgSrc={shoes2} 
                  textColor={props.theme.black}
                  noTextImg
                />
              </HashLink>
            </ButtonContainer>
          </ButtonsRow>
        </ButtonsContaienr>
        <GDCAFooter />
      </StyledGDCAJoin>
    </Page>
  )
}

export default withTheme(GDCAJoin)
