import styled from 'styled-components';

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  max-height: 100vh;
`;

export const LeftSection = styled.section`
  width: 35%;
  min-width: 400px;
`;

export const RightSection = styled.section`
  width: 55%;
  min-width: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
