import React from 'react';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '@/features/account/components/account.styles';
import { Spacer } from '@/components/spacer/spacer.components';
import { AccountStackParamList } from '@/infrastructure/navigation/account.navigator.type';

type props = StackScreenProps<AccountStackParamList, 'Main'>;

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

export const AccountScreen = ({ navigation }: props) => {
  return (
    <AccountBackground>
      <AccountCover />
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
