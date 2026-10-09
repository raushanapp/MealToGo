import { Theme } from '@/infrastructure/theme';
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
}

const getVariant = (position: SpacerPosition, sizes: SpacerSize, theme: Theme) => {
  const property = positionsVariant[position];
  const sizeIndex = sizesVariant[sizes];
  return `${property}: ${theme.space[sizeIndex]};`;
};

export const Spacer = styled.View<SpacerProps>`
  ${({ position = 'top', sizes = 'small', theme }) => getVariant(position, sizes, theme)}
`;
