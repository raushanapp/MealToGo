import React from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from '@/features/account/components/account.styles';
import { Spacer } from '@/components/spacer/spacer.components';
import { AccountScreenProps } from '@/infrastructure/navigation/account.navigator.type';

type AuthAction = {
  label: string;
  icon: string;
  destination: 'Login' | 'Register';
};

const AUTH_ACTIONS: AuthAction[] = [
  {
    label: 'Login',
    icon: 'lock-open-outline',
    destination: 'Login',
  },
  {
    label: 'Register',
    icon: 'account-plus-outline',
    destination: 'Register',
  },
];

export const AccountScreen = ({ navigation }: AccountScreenProps<'Main'>) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        {AUTH_ACTIONS?.map((action) => (
          <React.Fragment key={action.destination}>
            <AuthButton
              icon={action.icon}
              mode="contained"
              onPress={() => navigation.navigate(action.destination)}
            >
              {action.label}
            </AuthButton>
            <Spacer sizes="large" />
          </React.Fragment>
        ))}
      </AccountContainer>
    </AccountBackground>
  );
};
