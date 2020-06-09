import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Text from '../../../Text'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import TwitterIconButton from '../../../SocialIconButtons/TwitterIconButton'
import FacebookIconButton from '../../../SocialIconButtons/FacebookIconButton'
import InstagramIconButton from '../../../SocialIconButtons/InstagramIconButton'

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
`

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & svg {
    margin 1em;
  }
`

function ChapterExpansionPanel (props) {
  const { i18n } = useTranslation()

  const { twitter, facebook, instagram } = props
  const name = i18n.language === 'en' ? props.name_en : props.name_ja

  const twitterURL = `https://twitter.com/${twitter}`
  const facebookURL = `https://facebook.com/${facebook}`
  const instagramURL = `https://instagram.com/${instagram}`

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary aria-controls="panel1bh-content"><Text>{name}</Text></ExpansionPanelSummary>
      <StyledExpansionPanelDetails>
        <SocialIconsContainer>
          {twitter && <TwitterIconButton width='32px' onClick={() => { window.open(twitterURL) }}/>}
          {facebook && <FacebookIconButton width='32px' onClick={() => { window.open(facebookURL) }}/>}
          {instagram && <InstagramIconButton width='32px' onClick={() => { window.open(instagramURL) }}/>}
        </SocialIconsContainer>
      </StyledExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ChapterExpansionPanel
