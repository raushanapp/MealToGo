import homeBackground from '@assets/home_bg.jpg';
import styled from 'styled-components/native';

export const AccountBackground = styled.ImageBackground.attrs({
  source: homeBackground,
})`
  flex: 1;
  background-color: '#ddd';
  align-items: center;
  justify-content: center;
`;
