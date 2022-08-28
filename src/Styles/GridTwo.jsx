// import styled from 'styled-components';
import bg from '../assets/bg2.png';
import styled, { css } from 'styled-components';

export const Scaled = styled.div`
  // -moz-transform: scale(0.8);
  // -webkit-transform: scale(0.8);
  // transform: scale(0.8);
`;

export const GridContainer = styled.div`
   {
    a:visited {
      text-decoration: none;
    }

    background-image: linear-gradient(to bottom right, #000000 50%, #b8b7c7);
    display: grid;
    grid-template-columns: 0.2fr 1fr 1fr 1.2fr 1.2fr 1.2fr 1.2fr 1fr 1fr 1fr 0.2fr;
    grid-template-rows: 0.2fr 0.1fr 1fr 1fr 1fr 1fr 1fr 0.2fr;
    gap: 0px 0px;
  }
`;

const CardStyle = css`
    height: 380px;
    width: 400px;
    // width: 500px;
    background-color: rgb(77, 77, 77);
    // background-color: gray;
    // background-color: rgb(15, 1, 75); blue option
    border-radius: 10%;
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); 
    transition: box-shadow 0.3s ease-in-out;
  }
  :hover {
    // background-color: rgb(26, 2, 131);  light up blue
    background-color: rgb(110, 110, 110);
    box-shadow: 0 9px 30px rgba(255, 255, 255, 0.7);
  }
`;

export const CardOne = styled.div`
   {
    grid-area: 6 / 3 / 8 / 4;
    ${CardStyle}
  }
`;

export const CardTwo = styled.div`
   {
    grid-area: 6 / 5 / 8 / 6;
    ${CardStyle}
  }
`;

export const CardThree = styled.div`
   {
    grid-area: 6 / 7 / 8 / 8;
    ${CardStyle}
  }
`;

export const CardFour = styled.div`
   {
    grid-area: 6 / 9 / 8 / 10;
    ${CardStyle}
  }
`;

export const ProjectsTxt = styled.div`
   {
    grid-area: 5 / 6 / 6 / 7;
    // background-color: blue;
    color: white;
    text-align: center;
    font-size: 2cm;
    font-weight: bolder;
    text-decoration: underline;
    margin-top: 40%;
  }
`;

export const Welcome = styled.div`
   {
    grid-area: 2 / 3 / 3 / 4;
    background-color: blue;
    height: 50px;
    color: white;
    text-align: center;
    // font-size: 2cm;
    font-weight: bolder;
    padding-bottom: 15%;
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
    background-color: rgba(255, 255, 255, 0.05);
    // font-size: 0.8cm;
    position: relative;
    width: 140%;
    height: 100%;
    margin: 20px;
    color: white;
  }
  :after {
    display: block;
    content: '';
    width: 20%;
    height: 20%;
    position: absolute;
    top: -5px;
    left: -5px;
    border-top: 5px solid white;
    border-left: 5px solid white;
  }
  :before {
    display: block;
    content: '';
    width: 20%;
    height: 20%;
    position: absolute;
    bottom: -5px;
    right: -5px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
  }
`;

export const ContactResume = styled.div`
   {
    background-color: rgba(255, 255, 255, 0.05);

    grid-area: 3 / 7 / 6 / 11;
    // background-color: orange;
    height: 80%;
    margin-right: 100px;
    border: 5px solid white;
  }
`;

export const WholeSpace = styled.div`
   {
    grid-area: 2 / 2 / 8 / 11;
    backdrop-filter: blur(10px);
  }
`;
