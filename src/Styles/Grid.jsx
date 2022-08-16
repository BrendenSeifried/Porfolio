import styled from 'styled-components';

export const gridContainer = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const titleText = styled.titleText`
   {
    grid-area: 7 / 5 / 8 / 6;
  }
`;

export const header = styled.header`
   {
    grid-area: 1 / 1 / 2 / 10;
  }
`;

export const cardFour = styled.cardFour`
   {
    grid-area: 8 / 8 / 10 / 9;
  }
`;

export const cardThree = styled.cardThree`
   {
    grid-area: 8 / 6 / 10 / 7;
  }
`;

export const cardTwo = styled.cardTwo`
   {
    grid-area: 8 / 4 / 10 / 5;
  }
`;

export const cardOne = styled.cardOne`
   {
    grid-area: 8 / 2 / 10 / 3;
  }
`;

export const shortDescription = styled.shortDescription`
   {
    grid-area: 3 / 2 / 6 / 5;
  }
`;

export const bio = styled.bio`
   {
    grid-area: 3 / 6 / 7 / 9;
  }
`;
