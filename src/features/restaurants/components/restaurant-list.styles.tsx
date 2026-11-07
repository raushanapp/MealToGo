import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import type { Restaurant } from '@/services/restaurants/restaurants.types';

export const RestaurantsList = styled(FlatList<Restaurant>).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${(props) => props.theme.space[3]};
`;
