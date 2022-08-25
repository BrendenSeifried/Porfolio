import styled from 'styled-components';

export const GridContainer = styled.div`
   {
    display: grid;
    grid-template-columns: 0.2fr 1fr 1fr 1.2fr 1.2fr 1.2fr 1.2fr 1fr 1fr 1fr 0.2fr;
    grid-template-rows: 0.2fr 1fr 1fr 1fr 1fr 1fr 1fr 0.2fr;
    gap: 0px 0px;
  }
`;

export const CardOne = styled.div`
   {
    grid-area: 6 / 3 / 8 / 4;
    height: 500px;
    width: 500px;
    background-color: gray;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  }
`;

export const CardTwo = styled.div`
   {
    grid-area: 6 / 5 / 8 / 6;
    height: 500px;
    width: 500px;
    background-color: gray;
    border-radius: 10%;
    display: flex;
    justify-content: center;
  }
`;

export const CardThree = styled.div`
   {
    grid-area: 6 / 7 / 8 / 8;
    height: 500px;
    width: 500px;
    background-color: gray;
    border-radius: 10%;
    display: flex;
    justify-content: center;
  }
`;

export const CardFour = styled.div`
   {
    grid-area: 6 / 9 / 8 / 10;
    height: 500px;
    width: 500px;
    background-color: gray;
    border-radius: 10%;
    display: flex;
    justify-content: center;
  }
`;

export const ProjectsTxt = styled.div`
   {
    grid-area: 5 / 6 / 6 / 7;
    background-color: blue;
  }
`;

export const Welcome = styled.div`
   {
    grid-area: 2 / 3 / 3 / 4;
    background-color: blue;
    height: 50px;
  }
`;

export const Links = styled.div`
   {
    grid-area: 2 / 9 / 3 / 11;
    background-color: blue;
    height: 50px;
  }
`;

export const Bio = styled.div`
   {
    grid-area: 3 / 3 / 5 / 5;
    background-color: red;
  }
`;

export const ContactResume = styled.div`
   {
    grid-area: 3 / 7 / 6 / 11;
    background-color: orange;
    height: 80%;
    margin-right: 100px;
  }
`;

export const WholeSpace = styled.div`
   {
    grid-area: 2 / 2 / 8 / 11;
    backdrop-filter: blur(10px);
  }
`;
