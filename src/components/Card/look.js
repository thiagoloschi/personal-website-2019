import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 3rem 2rem;
  border: solid 1px ${({ color }) => color || '#fff'};
  background: ${({ color }) => color || '#fff'};
  color: ${({ text }) => text || '#000'};
  white-space: pre-line;
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.p`
  margin: unset;
  text-align: right;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.7;
`;

export default Section;
