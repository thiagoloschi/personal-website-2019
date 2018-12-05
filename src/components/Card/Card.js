import styled from 'styled-components';

const Card = styled.section`
  margin: 2rem 0;
  padding: 1rem 3rem 2rem;
  border: solid 1px ${({ color }) => color || '#fafafa'};
  background-color: ${({ color }) => color || '#fafafa'};
  color: ${({ text }) => text || '#000'};
  white-space: pre-line;
`;

export default Card;
