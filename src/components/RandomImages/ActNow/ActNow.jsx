import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import styled from 'styled-components';
import imgWebp from './act-now.webp';
import img from './act-now.png';

const StyledActNow = styled.img`
  width: ${props => props.width || '190px'};
`;

function ActNow (props) {
  return (
    <StyledActNow {...props} src={isWebpSupported() ? imgWebp : img} />
  )
}

export default ActNow;
