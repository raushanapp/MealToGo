import { SafeArea } from '@/components/utility/safe.area.component';
import React from 'react';
import { Text } from '@/components/typography/text.component';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { useAuthentication } from '@/services/authentication/authentication.context';

const LogoutButton = styled(Button)`
  width: 250px;
  margin-top: ${({ theme }) => theme.space[3]};
  align-self: center;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  border-radius: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[2]};
`;

export const SettingsScreen = () => {
  const { onLogout, isLoading } = useAuthentication();
  const handleLogout = () => {
    onLogout();
  };
  return (
    <SafeArea>
      <Text variant="label">Settings</Text>
      <LogoutButton
        mode="contained"
        onPress={handleLogout}
        loading={isLoading}
        disabled={isLoading}
      >
        Logout
      </LogoutButton>
    </SafeArea>
  );
};
