import React from 'react';
import { SafeArea } from '@/components/utility/safe.area.component';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Search } from '@/features/restaurants/components/search.component';

const Map = styled(MapView)`
  height: 100%;
  /* width: 100%; */
`;

export const MapScreen = () => {
  return (
    <SafeArea>
      <Search />
      <Map />
    </SafeArea>
  );
};
