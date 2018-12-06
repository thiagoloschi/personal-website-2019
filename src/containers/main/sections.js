import styled from 'styled-components';

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 100vh;
  overflow-y: hidden;

  @media only screen and (max-width: 1024px) {
    overflow-y: auto;
  }
`;

export const LeftSection = styled.section`
  width: 40%;
  min-width: 400px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightSection = styled.section`
  width: 55%;
  min-width: 400px;
  overflow-y: auto;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
