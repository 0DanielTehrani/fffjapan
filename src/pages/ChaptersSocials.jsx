import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import ChapterBox from '../components/ChaptersSocials/ChapterBox';
import Map from '../components/ChaptersSocials/Map';
import Divider from '@material-ui/core/Divider';

const MapAndChapterBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const ChaptersContainer = styled.div`
  width: 100%;
  padding-top: 5em;
  padding-right: 4em;
  padding-left: 4em;
`;

const MapConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function ChaptersSocials () {
  const chapters = [
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
    {
      name: 'FFF東京',
      twitter: 'ffftokyo',
      facebook: 'ffftokyo',
      instagram: 'ffftokyo'
    },
  ]

  return (
    <Page>
      <Header />
        <MapAndChapterBoxesContainer>
          <ChaptersContainer>
            {
              chapters.map((chapter) => <><Divider /><ChapterBox {...chapter} /></>)
            }
          </ChaptersContainer>
          <MapConatiner>
            <Map />
          </MapConatiner>
        </MapAndChapterBoxesContainer>
      <Footer />
    </Page>
  )
}

export default ChaptersSocials;
