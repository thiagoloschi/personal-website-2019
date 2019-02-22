import styled from 'styled-components';

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.fontColor};

  &:hover {
    opacity: 0.7;
  }
`;
