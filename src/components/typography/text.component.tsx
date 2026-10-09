import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components/native';

const defaultTextStyles = (theme: Theme) => `
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontWeights.regular};
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
