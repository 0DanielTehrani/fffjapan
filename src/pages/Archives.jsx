import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Text from '../components/Text'
import Page from '../components/Page'
import UpdateNotificationList from '../components/Top/UpdateNotificationList'

const StyledArchives = styled.div`
    font-size: 16px;
    ${media.lessThan('large')`
      font-size: 16px;
    `}
    ${media.lessThan('medium')`
      font-size: 14px;
    `}
    ${media.lessThan('small')`
      font-size: 13px;
    `}
    margin-top: 3.125em;
`

const StyledFooterContainer = styled.div`
  margin-top: 5em;
`

const UpdateNotificationListContainer = styled.div`
  margin: 2em auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.beige};
  padding: 3em;
  ${media.lessThan('medium')`
    padding: 3em 1em;
  `}
`
const LatestUpdateTitleContainer = styled.div`
  margin-bottom: 3em;
  text-align: center;
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 10px;
  `}
  margin-bottom: 2em;
`

const LatestUpdateTitle = styled(Text)`
  font-size: 2em;
`


function Archives () {
  const isLargeScreen = useMediaQuery({ query: '(max-width: 1170px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  return (
    <Page maxWidth='1120px'>
      <Header />
      <StyledArchives>
      <UpdateNotificationListContainer>
        <LatestUpdateTitleContainer>
          <LatestUpdateTitle>更新情報</LatestUpdateTitle>
        </LatestUpdateTitleContainer>
        <UpdateNotificationList />
      </UpdateNotificationListContainer>
      </StyledArchives>
      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </Page>
  )
}

export default Archives
