import type { StackScreenProps } from '@react-navigation/stack';

export type SettingsStackParamList = {
  Settings: undefined;
  SettingsDetailsScreen: undefined;
  Favourites: undefined;
};

export type SettingsScreenProps<RouteName extends keyof SettingsStackParamList> = StackScreenProps<
  SettingsStackParamList,
  RouteName
>;
