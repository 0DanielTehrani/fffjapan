import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import TopBoard from '../../components/ApproachToGovernments/TopBoard';
import CEDBoard from '../../components/ApproachToGovernments/CEDBoard';
import TextImage from '../../components/ApproachToGovernments/TextImage';
import ActionsTitle from '../../components/ApproachToGovernments/ActionsTitle';
import Actions1 from '../../components/ApproachToGovernments/Actions/Actions1';
import Actions2 from '../../components/ApproachToGovernments/Actions/Actions2';
import ActionBoard from '../../components/ApproachToGovernments/ActionBoard';
import Flower from '../../components/RandomImages/Flower';
import Bee from '../../components/RandomImages/Bee';
import approaches from './approaches';

const StyledApproachToGovernments = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 13px;
  `}
`;

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`;

const TopBoardContainer = styled.div`
`;

const TextImageContainer = styled.div`
  margin-top: -2.625em;
  margin-left: 1.6875em;
`;

const CEDBoardContainer = styled.div`
  margin-top: 3.125em;
`;

const ActionsTitleContainer = styled.div`
  text-align: center;
  margin: 3.125em 0;
`;

const ActionBoardContainer = styled.div`
  margin-bottom: 5em;
  position: relative;
`;

const ActinosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & >:nth-child(2) {
    margin-top: 5em;
  }
  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
  `}
`;

const ActionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  ${media.lessThan('large')`
    width: 95%;
  `}
`;

const RandomImageContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
`;

const BottomImageContainer = styled.div`
  text-align: center;
`;

const FooterContainer = styled.div`
  margin-top: 5em;
  margin-bottom: 2em;
`;

function ApproachToGovernments () {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  const randomImages = [
    {
      component: <RandomImageContainer top='15em' right='1em'><Flower /></RandomImageContainer>,
      position: 1
    }
  ]

  const randomImagePositions = randomImages.map((randomImage) => randomImage.position);

  const approaches1 = approaches.filter((approach, i) => !(i % 2));
  const approaches2 = approaches.filter((approach, i) => i % 2);

  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <StyledApproachToGovernments>
        <TopBoard />
        <TextImageContainer>
          <TextImage />
        </TextImageContainer>
        <CEDBoardContainer>
          <CEDBoard />
        </CEDBoardContainer>
        <ActionsTitleContainer>
          <ActionsTitle />
        </ActionsTitleContainer>
        <ActinosContainer>
          {
            isMobile ?
            <ActionsColumn>
              {
                approaches.map((approach, i) =>
                <ActionBoardContainer>
                    <ActionBoard {...approach} />
                </ActionBoardContainer>)
              }
            </ActionsColumn>
            :
            <>
            <ActionsColumn>
            {
              approaches1.map((approach, i) =>
                <>
                  <ActionBoardContainer>
                    <ActionBoard {...approach} />
                    {
                      !isMobile &&
                      randomImagePositions.includes(i) &&
                      randomImages.find((randomImage) => randomImage.position === i).component
                    }
                  </ActionBoardContainer>
                </>
              )
            }
            </ActionsColumn>
            <ActionsColumn>
            {
              approaches2.map((approach) => <ActionBoardContainer><ActionBoard {...approach} /></ActionBoardContainer>)
            }
            </ActionsColumn>
            </>
          }
        </ActinosContainer>
        <BottomImageContainer><Bee /></BottomImageContainer>
      </StyledApproachToGovernments>
    <FooterContainer>
      <Footer />
    </FooterContainer>
    </Page>
  );
}

export default ApproachToGovernments;
