import React from 'react';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { CompactRestaurantInfo } from '@/components/restaurant/compact.restaurant.info.component';

export const MapCallout: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
