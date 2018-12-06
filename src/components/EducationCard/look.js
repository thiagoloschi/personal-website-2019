import styled from 'styled-components';
import Card from 'components/Card';

export const School = styled.strong`
  max-width: 280px;

  @media only screen and (max-width: 1024px) {
    max-width: 240px;
  }
`;

export const Major = styled.p`
  margin: 8px 0;
`;

export const Badge = styled.img`
  width: 56px;
  margin-right: 24px;
  padding: 8px;
  border: 1px solid #ddd;

  @media only screen and (max-width: 1024px) {
    width: 42px;
    margin-right: 16px;
  }
`;

export const ContainedCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 512px;
`;

export const InfoSection = styled.article`
  width: 80%;
`;
