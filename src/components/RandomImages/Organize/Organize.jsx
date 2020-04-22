import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import styled from 'styled-components';
import imgWebp from './organize.webp';
import img from './organize.png';

const StyledImage = styled.img`
  width: ${props => props.width || '182.385px'};
`;

function Organize (props) {
  return (
    <StyledImage {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default Organize;
