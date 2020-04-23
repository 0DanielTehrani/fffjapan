import React from 'react';
import styled from 'styled-components';
import ExternalLinkItem from '../../ExternalLinkItem';
import Text from '../../Text';

const StyledMobileExternalLinkItem = styled(ExternalLinkItem)`
  border-top: solid 0.1em #fff;
  border-bottom: solid 0.1em #fff;
  background-color: ${props => props.theme.green};
  text-decoration: none;
  width:100%;
  text-align: center;
`;

const StyledText = styled(Text)`
  font-size: 0.8em;
  color: #fff;
`;

function MobileExternalLinkItem (props) {
  return (
    <StyledMobileExternalLinkItem {...props}><StyledText>{props.children}</StyledText></StyledMobileExternalLinkItem>
  )
}

export default MobileExternalLinkItem;
