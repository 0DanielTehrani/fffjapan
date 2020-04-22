import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import styled from 'styled-components';
import imgWebp from './join-us-text.webp';
import img from './join-us-text.png';

const StyledJoinUsText = styled.img`
  width: ${props => props.width || '183.88px'};
`;

function JoinUsText (props) {
  return (
    <StyledJoinUsText {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default JoinUsText;
