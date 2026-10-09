import React from 'react';
import { Theme, theme } from '@/infrastructure/theme';
import styled from 'styled-components/native';

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
};

type SpacerPosition = keyof typeof positionsVariant;
type SpacerSize = keyof typeof sizesVariant;

interface SpacerProps {
  position?: SpacerPosition;
  sizes?: SpacerSize;
  children: React.ReactNode;
}

type SpacerVariant = `${(typeof positionsVariant)[SpacerPosition]}: ${string};`;

const SpacerView = styled.View<{ variant: SpacerVariant }>`
  ${({ variant }) => variant}
`;

const getVariant = (position: SpacerPosition, sizes: SpacerSize, theme: Theme): SpacerVariant => {
  const property = positionsVariant[position];
  const sizeIndex = sizesVariant[sizes];
  return `${property}: ${theme.space[sizeIndex]};`;
};

export const Spacer = ({ position = 'top', sizes = 'small', children }: SpacerProps) => {
  const variant = getVariant(position, sizes, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
