import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as _Link } from 'react-router-dom'

import GDAHeader from '../../../components/GDAHeader'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'

/*
import {
  StyledPage,
  TitleContainer,
  Title,
  Section,
  Body,
  Link,
  LinkExternal,
  Heading1,
  Heading2,
} from './GDADemand'
*/

export const StyledPage = styled(Page)`
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
`

export const TitleContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`

export const Title = styled(Text)`
  display: block;
  color: #000;
  font-size: 2em
`

export const Section = styled.div`
  margin: 2em 0;
`

export const Body = styled.div`
  font-family: ${props => props.theme.fontFamilyLight};
  font-weight: 300;
  font-style: normal;
  padding: 0 12em;
  margin-top: 5em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

export const Link = styled(_Link)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
`

export const LinkExternal = styled.a
`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`

const TextSmall = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1em;
`

const TextSmallUnderline = styled(TextSmall)`
  text-decoration: underline;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

export const Heading1 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.4em;
  font-weight: bold;
  color: ${props => props.theme.green};
`


function GDAParticipantInfo () {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
      </Body>
    </StyledPage>    
  )
}

export default GDAParticipantInfo
