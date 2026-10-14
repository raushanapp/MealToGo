import type { RestaurantsResponse } from '@/services/restaurants/restaurants.types';
import camelize from 'camelize';
import { mockImages, mocks } from './mock';

type RawRestaurantsResponse = (typeof mocks)[keyof typeof mocks];

const restaurantsTransform = (result: RawRestaurantsResponse): RestaurantsResponse => {
  const mappedResults = result.results.map((restaurant) => {
    const images = restaurant.photos.map(() => {
      return mockImages[Math.floor(Math.random() * mockImages.length)];
    });
    return {
      ...restaurant,
      images: images,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize({ ...result, results: mappedResults });
};

export const restaurantsRequest = (
  location: string = '37.7749295,-122.4194155',
): Promise<RestaurantsResponse> => {
  return new Promise<RestaurantsResponse>((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];
    if (!mock) {
      reject(new Error('No mock data found for this location'));
      return;
    }
    resolve(restaurantsTransform(mock));
  });
};
