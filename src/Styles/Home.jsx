import styled from 'styled-components';
import img from '../assets/water.jpg';

export const AboutContainer = styled.div`
  margin: 300px 0px -30px 0px;

  h1 {
    color: rgba(228, 213, 213, 0.589);
    display: flex;
    justify-content: center;
  }
  h2 {
    color: rgba(238, 229, 229, 0.849);
    display: flex;
    justify-content: left;
    font-family: 'Source Sans Pro', sans-serif;
    // font-size: 100px;
    margin: -30px 0px -30px 0px;
  }
  h3 {
    color: rgba(238, 229, 229, 0.849);

    display: flex;
    justify-content: left;
    font-family: 'Source Sans Pro', sans-serif;
    // font-size: 50px;
  }
  p {
    color: rgba(238, 229, 229, 0.849);
    margin: -30px 0px -30px 0px;
    display: flex;
    justify-content: left;
    font-family: 'Source Sans Pro', sans-serif;
    // font-size: 30px;
  }
  image {
    height: 100vh;
  }
`;

export const LandingBackground = styled.div`
  background-image: url(${img});

  //   filter: blur(3px);
  //   -webkit-filter: blur(1.2px);

  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// export const LandingBackground = styled.div`
//  border: 1px solid #000;
//     background-image: url(${img});
//     width: 2000px;
//     height: 2000px;`
