import styled from 'styled-components';

const Article = styled.article`
  padding: 2rem;
  max-width: 512px;
  margin: auto;
  border: solid 1px ${({ color, theme }) => color || theme.color };
  background: ${({ color, theme }) => color || theme.color };
  color: ${({ text, theme }) => text || theme.fontColor };
  white-space: pre-line;
`;

export const Title = styled.h4`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0;
`;

export const Date = styled.time`
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

export default Article;
