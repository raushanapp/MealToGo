import React from 'react';
import styled from 'styled-components/native';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant?.images?.[0] }} />
      <Text variant="caption" numberOfLines={3}>
        {restaurant?.name}
      </Text>
    </Item>
  );
};
