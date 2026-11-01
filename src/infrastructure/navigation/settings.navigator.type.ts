import type { StackScreenProps } from '@react-navigation/stack';

export type SettingsStackParamList = {
  SettingsMainScreen: undefined;
  SettingsDetailsScreen: undefined;
};

export type SettingsScreenProps<RouteName extends keyof SettingsStackParamList> = StackScreenProps<
  SettingsStackParamList,
  RouteName
>;
