import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import latlongs from './latlongs.json';

const StyledMap = styled(Map)`
  width: 500px;
  height: 800px;
  ${media.lessThan('large')`
    width: 600px;
    height: 500px;
  `}
  ${media.lessThan('medium')`
    width: 600px;
    height: 500px;
  `}
  ${media.lessThan('small')`
    width: 300px;
    height: 300px;
  `}
`;

function LeafletMap () {
  const position = [38, 137];
  const zoom = 5;

  const accessToken = '';

  const osmAttribution =
      '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

  const osmUrl =
    `https://api.mapbox.com/styles/v1/danieltehrani/cka0g4m1j1rmh1imp36ej0trp/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;

  return (
    <StyledMap center={position} zoom={zoom}>
      <TileLayer
        attribution={osmAttribution}
        url={osmUrl}
      />
      {
        Object.keys(latlongs).map((key) => <Marker position={Object.values(latlongs[key])}>
          <Popup>{key}</Popup>
        </Marker>)
      }
    </StyledMap>
  )
}

export default LeafletMap;
