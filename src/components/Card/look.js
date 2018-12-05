import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 3rem 2rem;
  border: solid 1px ${({ color }) => color || '#fff'};
  background-color: ${({ color }) => color || '#fff'};
  color: ${({ text }) => text || '#000'};
  white-space: pre-line;
`;

export default Section;
