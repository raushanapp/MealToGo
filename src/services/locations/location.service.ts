import { locations, type LocationResponse } from '@/services/locations/location.mock';
import camelize from 'camelize';
interface LocationCoordinates {
  lat: number;
  lng: number;
}

const locationTransform = (result: LocationResponse): LocationCoordinates => {
  const camelizedResult = camelize(result) as LocationResponse;
  const { geometry } = camelizedResult?.results[0] ?? {};
  const { lat, lng } = geometry?.location ?? {};
  if (lat === undefined || lng === undefined) {
    throw new Error('No coordinates found for location');
  }

  return { lat, lng };
};

export const locationRequest = (searchTerm: string): Promise<LocationCoordinates> => {
  return new Promise<LocationCoordinates>((resolve, reject) => {
    const location = locations[searchTerm.toLowerCase()];
    if (location) {
      resolve(locationTransform(location));
    } else {
      reject(new Error('Location not found'));
    }
  });
};
