import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;
const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo: React.FC<{ restaurant: Restaurant; isMap?: boolean }> = ({
  restaurant,
  isMap,
}) => {
  // Android renders Callout children as a static bitmap, so <Image> stays blank; WebView works.
  const useWebview = isMap && Platform?.OS === 'android';
  return (
    <Item>
      {useWebview ? (
        <CompactWebview source={{ uri: restaurant?.images?.[0] ?? '' }} />
      ) : (
        <CompactImage source={{ uri: restaurant?.images?.[0] }} />
      )}
      <Text variant="caption" numberOfLines={3}>
        {restaurant?.name}
      </Text>
    </Item>
  );
};
