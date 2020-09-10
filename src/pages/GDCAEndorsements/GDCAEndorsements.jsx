import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import PageGDCA from '../../components/PageGDCA'
import Text from '../../components/Text'
import Endorse from './Endorse'
import endorsements1 from './endorsements1'
import endorsements2 from './endorsements2'

const StyledGDCAEndorsements = styled.div`
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

const TitleContainer = styled.div
`
  text-align: center;
  margin-bottom: 50px;
  margin-top: -80px;
`

const Title2Container = styled.div
`
  text-align: center;
  margin: 20px 0;
`

const Title = styled(Text)
`
  font-size: 2rem;
`

const Title2 = styled(Text)
`
  font-size: 1.3rem;
  color: ${props => props.theme.black};
`


function GDCAEndorsements (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  
  return (
    <PageGDCA maxWidth='1120px'>
      <TitleContainer>
        <Title bold>賛同団体</Title>
      </TitleContainer>
      <Title2Container>
        <Title2>若者（生徒・学生）団体</Title2>
      </Title2Container>
      {
        endorsements1.map((endorsement) => 
        <Endorse orgName={endorsement.orgName} href={endorsement.link} />
        )
      }
      <Title2Container>
        <Title2>団体</Title2>
      </Title2Container>
      {
        endorsements2.map((endorsement) => 
        <Endorse orgName={endorsement.orgName} href={endorsement.link} />
        )
      }
    </PageGDCA>
    )
}

export default GDCAEndorsements
