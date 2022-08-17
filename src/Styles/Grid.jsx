import styled from 'styled-components';

export const GridContainer = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const TitleText = styled.div`
   {
    grid-area: 7 / 5 / 8 / 6;
  }
`;

export const Header = styled.div`
   {
    grid-area: 1 / 1 / 2 / 10;
  }
`;

export const CardFour = styled.div`
   {
    grid-area: 8 / 8 / 10 / 9;
  }
`;

export const CardThree = styled.div`
   {
    grid-area: 8 / 6 / 10 / 7;
  }
`;

export const CardTwo = styled.div`
   {
    grid-area: 8 / 4 / 10 / 5;
  }
`;

export const CardOne = styled.div`
   {
    grid-area: 8 / 2 / 10 / 3;
  }
`;

export const shortDescription = styled.div`
   {
    grid-area: 3 / 2 / 6 / 5;
  }
`;

export const bio = styled.div`
   {
    grid-area: 3 / 6 / 7 / 9;
  }
`;
