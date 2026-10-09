import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components/native';

const defaultTextStyles = (theme: Theme) => `
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top:${theme.space[0]};
    margin-bottom: ${theme.space[0]};
`;

const body = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme: Theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme: Theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme: Theme) => `
    color: ${theme.colors.text.error};
`;

const variants = {
  body,
  hint,
  label,
  caption,
  error,
};

export type TextVariant = keyof typeof variants;

export const Text = styled.Text<{ variant?: TextVariant }>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }) => variants[variant](theme)}
`;
