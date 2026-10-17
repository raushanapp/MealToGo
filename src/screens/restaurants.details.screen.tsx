import React from 'react';
import { SafeArea } from '@/components/utility/safe.area.component';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RestaurantsStackParamList } from '@/infrastructure/navigation/restaurants.navigators.type';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';

type Props = StackScreenProps<RestaurantsStackParamList, 'RestaurantsDetailsScreen'>;

export const RestaurantsDetailsScreen = ({ route }: Props) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard
        restaurant={restaurant as React.ComponentProps<typeof RestaurantsInfoCard>['restaurant']}
      />
    </SafeArea>
  );
};
