import { locations, type LocationResponse } from '@/services/locations/location.mock';
import camelize from 'camelize';
export interface LocationCoordinates {
  lat: number;
  lng: number;
  viewport: ViewportProps;
}

interface ViewportProps {
  northeast: {
    lat: number;
    lng: number;
  };
  southwest: {
    lat: number;
    lng: number;
  };
}

const locationTransform = (result: LocationResponse): LocationCoordinates => {
  const camelizedResult = camelize(result) as LocationResponse;
  const { geometry } = camelizedResult?.results[0] ?? {};
  const { viewport, location } = geometry ?? {};
  if (location?.lat === undefined || location?.lng === undefined || viewport === undefined) {
    throw new Error('No coordinates found for location');
  }

  return { lat: location?.lat, lng: location?.lng, viewport };
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
