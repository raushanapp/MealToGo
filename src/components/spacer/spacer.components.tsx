import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TopSmall = styled(View)`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled(View)`
  margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

interface SpacerProps {
  size?: 'top.small' | 'top.medium' | 'top.large' | 'left.small' | 'left.medium' | 'left.large';
}

export const Spacer: React.FC<SpacerProps> = ({ size = 'top.small' }) => {
  switch (size) {
    case 'top.small':
      return <TopSmall />;
    case 'top.medium':
      return <TopMedium />;
    case 'top.large':
      return <TopLarge />;
    case 'left.small':
      return <LeftSmall />;
    case 'left.medium':
      return <LeftMedium />;
    case 'left.large':
      return <LeftLarge />;
    default:
      return <TopSmall />;
  }
};
