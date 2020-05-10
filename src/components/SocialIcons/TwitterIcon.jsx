import React from 'react';
import styled from 'styled-components';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

const StyledTwitterIcon = styled(Twitter)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`;

function TwitterIcon (props) {
  return <StyledTwitterIcon {...props}/>
}

export default TwitterIcon;
