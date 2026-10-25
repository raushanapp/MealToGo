import React, { useState } from 'react';
import { AccountScreenProps } from '@/infrastructure/navigation/account.navigator.type';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Errorcontainer,
  Title,
} from '@/features/account/components/account.styles';
import { Spacer } from '@/components/spacer/spacer.components';
import { useAuthentication } from '@/services/authentication/authentication.context';

export const LoginScreen = ({ navigation }: AccountScreenProps<'Login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, isLoading } = useAuthentication();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer sizes="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {error && (
          <Errorcontainer>
            <Title variant="error">{error}</Title>
          </Errorcontainer>
        )}
        <Spacer sizes="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            loading={isLoading}
            disabled={isLoading}
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
        <Spacer sizes="large">
          <AuthButton mode="contained" disabled={isLoading} onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
