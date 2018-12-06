import styled from 'styled-components';
import Card from 'components/Card';

export const FixedSizeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 750px;
  max-width: 790px;
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: 1rem;
  max-height: 340px;
`;

export const Description = styled.p`
  opacity: 0.8;
  text-align: justify;
`;

export const Company = styled.p`
  margin: unset;
  font-size: 1.5rem;
  font-weight: bold;
`;
