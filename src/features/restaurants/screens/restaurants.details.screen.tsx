import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { SafeArea } from '@/components/utility/safe.area.component';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RestaurantsStackParamList } from '@/infrastructure/navigation/restaurants.navigators.type';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';

type Props = StackScreenProps<RestaurantsStackParamList, 'RestaurantsDetailsScreen'>;

export const RestaurantsDetailsScreen = ({ route }: Props) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
  const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
  const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
  const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard
        restaurant={restaurant as React.ComponentProps<typeof RestaurantsInfoCard>['restaurant']}
      />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Pancakes" />
          <List.Item title="Waffles" />
          <List.Item title="Omelette" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger" />
          <List.Item title="Salad" />
          <List.Item title="Sandwich" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Steak" />
          <List.Item title="Pasta" />
          <List.Item title="Seafood" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Juice" />
          <List.Item title="Soda" />
          <List.Item title="Water" />
          <List.Item title="Beer" />
          <List.Item title="Wine" />
          <List.Item title="Cocktail" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
