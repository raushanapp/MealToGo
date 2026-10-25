import type { StackScreenProps } from '@react-navigation/stack';

export type AccountStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

export type AppStackScreenProps<
  ParamList extends Record<string, object | undefined>,
  RouteName extends keyof ParamList,
> = StackScreenProps<ParamList, RouteName>;

export type AccountScreenProps<RouteName extends keyof AccountStackParamList> = AppStackScreenProps<
  AccountStackParamList,
  RouteName
>;
