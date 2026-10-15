import React from 'react';
import { Spacer } from '@/components/spacer/spacer.components';
import { Text } from '@/components/typography/text.component';
import { SvgXml } from 'react-native-svg';
import open from '../../../../assets/svg/open';
import star from '../../../../assets/svg/star';
import {
  ClosedIcons,
  Info,
  Open,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from './restaurants.info.card.styles';

interface RestaurantsInfoCardProps {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
  images?: string[];
}
interface RestaurantsProps {
  restaurant: RestaurantsInfoCardProps;
  error?: string | null;
  isLoading?: boolean;
}

export const RestaurantsInfoCard: React.FC<RestaurantsProps> = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://img.magnific.com/free-photo/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce_2829-11002.jpg?t=st=1791439593~exp=1791443193~hmac=ac8e56773e94888aa3e8a444c34789e89a20d937a1b28d87b2e5dca4635a7dc1&w=2000',
    ],
    images,
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: images?.[0] || photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer sizes="large" position="left">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer sizes="large" position="left">
              <ClosedIcons source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
