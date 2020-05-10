import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';

const StyledFacebookIcon = styled(FacebookSquare)`
  width: ${props => props.width || '25px'};
  color: ${props => props.color || props.theme.textColor};
`;

function FacebookIcon (props) {
  return <StyledFacebookIcon {...props}/>
}

export default FacebookIcon;
