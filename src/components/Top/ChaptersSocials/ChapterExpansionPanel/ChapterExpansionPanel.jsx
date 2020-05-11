import React from 'react';
import styled from 'styled-components'
import Text from '../../../Text';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TwitterIcon from '../../../SocialIcons/TwitterIcon';
import FacebookIcon from '../../../SocialIcons/FacebookIcon';
import InstagramIcon from '../../../SocialIcons/InstagramIcon';

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
`;


const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & svg {
    margin 1em;
  }
`;

function ChapterExpansionPanel (props) {
  const { name, twitter, facebook, instagram } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary aria-controls="panel1bh-content"><Text>{name}</Text></ExpansionPanelSummary>
      <StyledExpansionPanelDetails>
        <SocialIconsContainer>
          <TwitterIcon width='2em'/>
          <FacebookIcon width='2em'/>
          <InstagramIcon width='2em'/>
        </SocialIconsContainer>
      </StyledExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ChapterExpansionPanel;
