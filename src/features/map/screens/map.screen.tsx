import React, { useEffect, useState } from 'react';
import { useLocationContext } from '@/services/locations/location.context';
import styled from 'styled-components/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Search } from '@/features/map/components/search.component';
import { useRestaurantsContext } from '@/services/restaurants/restaurants.context';
import { MapCallout } from '@/features/map/components/map.callout.component';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomNavigationTabsParamList } from '@/infrastructure/navigation/bottom.navigation.tabs.type';

type Props = {
  navigation: BottomTabNavigationProp<BottomNavigationTabsParamList, 'MapScreen'>;
};
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }: Props) => {
  const [latDelta, setLatDelta] = useState<number>(0);
  const { location } = useLocationContext();
  const { restaurants } = useRestaurantsContext();
  const { lat, lng, viewport } = location ?? {};
  useEffect(() => {
    const northeast = viewport?.northeast?.lat;
    const southwest = viewport?.southwest?.lat;
    if (northeast !== undefined && southwest !== undefined) {
      setLatDelta(northeast - southwest);
    }
  }, [viewport?.northeast?.lat, viewport?.southwest?.lat]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat ?? 0,
          longitude: lng ?? 0,
          latitudeDelta: latDelta,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants?.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant?.geometry?.location?.lat ?? 0,
                longitude: restaurant?.geometry?.location?.lng ?? 0,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantMainScreen', {
                    screen: 'RestaurantsDetailsScreen',
                    params: { restaurant },
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
