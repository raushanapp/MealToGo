import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;

import type { Restaurant } from '@/services/restaurants/restaurants.types';

export const MapCallout: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  return <MyText>{restaurant?.name}</MyText>;
};
