import React from 'react';
import styled from 'styled-components';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';

const StyledYouTubeIcon = styled(Youtube)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`;

function YouTubeIcon (props) {
  return <StyledYouTubeIcon {...props}/>
}

export default YouTubeIcon;
