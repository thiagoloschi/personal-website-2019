import styled from 'styled-components';

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 2;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LeftSection = styled.section`
  flex: 1;
  width: 50%;
  min-width: 400px;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const FixedContent = styled.section`
  position: fixed;
  flex: 1;
  width: inherit;

  @media only screen and (max-width: 1024px) {
    position: initial;
    width: 100%;
  }
`;

export const RightSection = styled.section`
  flex: 1;
  width: 55%;
  min-width: 400px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
