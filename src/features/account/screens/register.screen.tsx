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

export const RegisterScreen = ({ navigation }: AccountScreenProps<'Register'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { onRegister, error, isLoading } = useAuthentication();
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
        <Spacer sizes="large">
          <AuthInput
            label="Repeat Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatPassword(p)}
          />
        </Spacer>

        {error && (
          <Errorcontainer>
            <Title variant="error">{error}</Title>
          </Errorcontainer>
        )}
        <Spacer sizes="large">
          <AuthButton
            icon="email"
            mode="contained"
            loading={isLoading}
            disabled={isLoading}
            onPress={() => onRegister(email, password, repeatPassword)}
          >
            Register
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
