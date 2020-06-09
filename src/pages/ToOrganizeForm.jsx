import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Page from '../components/Page'
import TopLabelText from '../components/ToOrganizeForm/TopLabelText'
import LargeImage from '../components/ToOrganizeForm/LargeImage'
import OrganizeImage from '../components/RandomImages/Organize'
import AboutOrganizing from '../components/ToOrganizeForm/AboutOrganizing'
import ToOrganizeFormButton from '../components/ToOrganizeForm/ToOrganizeFormButton'
import CreditNotation from '../components/CreditNotation'

const StyledToOrganizeForm = styled.div`
  background-color: ${props => props.theme.blue};
  padding: 2.5em;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    align-items: center;
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

const TopRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.94em;
  ${media.lessThan('small')`
    flex-direction: column;
  `}
`

const OrganizeImageContainer = styled.div`
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LargeImageContainer = styled.div`
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26.875em;
  ${media.lessThan('large')`
    margin-top: 2em;
    align-items: center;
    width: auto;
  `}
`

const AboutOrganizingContainer = styled.div`
  margin-bottom: 9em;
`

const ToOrganizeFormButtonContainer = styled.div`
`

const FooterContainer = styled.div`
  margin-top: 5em;
`

function ToOrganizeForm () {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  return (
    <Page>
      <Header />
      <StyledToOrganizeForm>
        <LeftContainer>
          <TopRowContainer>
            <TopLabelText />
            <OrganizeImageContainer>
              <OrganizeImage />
            </OrganizeImageContainer>
          </TopRowContainer>
          <AboutOrganizingContainer>
            <AboutOrganizing />
          </AboutOrganizingContainer>
          <ToOrganizeFormButtonContainer>
            <ToOrganizeFormButton />
          </ToOrganizeFormButtonContainer>
        </LeftContainer>
        <RightContainer>
          <LargeImageContainer>
            {
              isMobile
                ? <LargeImage width='95%' />
                : <LargeImage/>
            }
          </LargeImageContainer>
          <CreditNotation creditTo='Fridays For Future Kyoto'/>
        </RightContainer>
      </StyledToOrganizeForm>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default ToOrganizeForm
