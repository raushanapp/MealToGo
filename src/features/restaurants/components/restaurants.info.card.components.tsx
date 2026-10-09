import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Text, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/svg/star';
import open from '../../../../assets/svg/open';
import { Spacer } from '@/components/spacer/spacer.components';

interface RestaurantsInfoCardProps {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};

  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;
const ClosedTemporarily = styled(Text)`
  color: ${(props) => props.theme.colors.ui.error};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantsInfoCard: React.FC<{ restaurant: RestaurantsInfoCardProps }> = ({
  restaurant = {},
}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://img.magnific.com/free-photo/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce_2829-11002.jpg?t=st=1791439593~exp=1791443193~hmac=ac8e56773e94888aa3e8a444c34789e89a20d937a1b28d87b2e5dca4635a7dc1&w=2000',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <ClosedTemporarily>CLOSED TEMPORARILY</ClosedTemporarily>}
            <Spacer sizes="large" position="left">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer sizes="large" position="left">
              <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
