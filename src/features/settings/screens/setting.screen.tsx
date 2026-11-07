import React from 'react';
import { SafeArea } from '@/components/utility/safe.area.component';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Text } from '@/components/typography/text.component';
import { useAuthentication } from '@/services/authentication/authentication.context';
import { Spacer } from '@/components/spacer/spacer.components';
import { SettingsScreenProps } from '@/infrastructure/navigation/settings.navigator.type';

const SettingItemList = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
`;

export const SettingsMainScreen = ({ navigation }: SettingsScreenProps<'Settings'>) => {
  const { onLogout, user } = useAuthentication();
  const handleLogout = () => {
    onLogout();
  };
  return (
    <SafeArea>
      <AvatarContainer>
        <AvatarIcon size={150} icon="human" />
        <Spacer position="top" sizes="large">
          <Text variant="label">{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingItemList
          title="Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingItemList
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={handleLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
