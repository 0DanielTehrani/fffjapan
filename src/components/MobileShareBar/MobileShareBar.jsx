import React, { Component } from 'react'
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import TwitterShareButton from '../SocialIconButtons/TwitterShareButton';
import FacebookShareButton from '../SocialIconButtons/FacebookShareButton';
import Fade from 'react-reveal/Fade';
import Text from '../Text';
import { FACEBOOK_SHARE_URL } from '../../constants';
import { constructTwitterShareURL } from '../utils';

const StyledMobileShareBar = styled.div`
  display: ${props => props.hidden ? 'none' : 'flex'};
  position: fixed;
  bottom: 1em;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
`;

const TwitterButtonContainer = styled.div`
`;

const FacebookButtonContainer = styled.div`
`;

const StyledText = styled(Text)`
  display: inline-block;
  font-size: 1em;
`;

class MobileShareBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    this.setState({ scrollTop });
  }

  render () {
    const { t } = this.props;
    const { pathname } = this.props.location;
    const twitterShareURL = constructTwitterShareURL(t(`Sidebar.ShareText.${pathname}`), window.location.href);

    const show = this.state.scrollTop > 50;
    return (
        <StyledMobileShareBar hidden={!show}>
          <Fade bottom>
            <StyledText>{t('Sidebar.share')}</StyledText>
            <TwitterButtonContainer>
              <TwitterShareButton
                width='3.2em'
                onClick={() => {window.open(twitterShareURL)}} />
            </TwitterButtonContainer>
            <FacebookButtonContainer>
              <FacebookShareButton
                width='3.2em'
                onClick={() => {window.open(FACEBOOK_SHARE_URL)}}/>
            </FacebookButtonContainer>
          </Fade>
        </StyledMobileShareBar>
      )
  }
}

export default withRouter(withTranslation()(MobileShareBar));
