import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  max-width: 512px;
  margin: auto;
  border: solid 1px ${({ color }) => color || '#fff'};
  background: ${({ color }) => color || '#fff'};
  color: ${({ text }) => text || '#000'};
  white-space: pre-line;
`;

export const Title = styled.header`
  display: flex;
  align-items: baseline;
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

export const ImageWrapper = styled.a`
  text-align: center;
`;

export default Section;
