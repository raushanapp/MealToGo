import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

interface RestaurantsInfoCardProps {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

export const RestaurantsInfoCard: React.FC<{ restaurant: RestaurantsInfoCardProps }> = ({
  restaurant = {},
}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://img.magnific.com/free-photo/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce_2829-11002.jpg?t=st=1791439593~exp=1791443193~hmac=ac8e56773e94888aa3e8a444c34789e89a20d937a1b28d87b2e5dca4635a7dc1&w=2000',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  const singlePhoto = photos[0];
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: singlePhoto }} style={styles.cover} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    height: 220,
    width: '100%',
    backgroundColor: 'white',
  },
  title: { padding: 16 },
});
