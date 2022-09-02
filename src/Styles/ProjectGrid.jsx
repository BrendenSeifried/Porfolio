import styled from 'styled-components';
import fmmpic from '../assets/FMMpic.png';

export const PGContainer = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 0.1fr;
  grid-template-rows: 0.1fr 1fr 1fr 1fr 0.1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . . . . .'
    '. ProjectName ProjectName Photo Photo .'
    '. Description Description Photo Photo .'
    '. Description Description Photo Photo .'
    '. . . . . .';

  height: 95vh;
  margin-bottom: 10%;

  background-color: #8b5e34;

  border-radius: 2%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 10px;
  color: white;
  border: 10px double black;
  opacity: 0.97;
  position: fixed;
  top: 2%;
  left: 12%;
  bottom: 7%;
  right: 12%;
  overflow: auto;
  // font-size: 21px;
  text-align: center;
  overflow: hidden;
  -webkit-animation: fadein 3s;
  -moz-animation: fadein 3s;
  -ms-animation: fadein 3s;
  -o-animation: fadein 3s;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }
`;

export const Photo = styled.div`
  grid-area: Photo;
  border: 5px solid black;
  // // background-image: url('../assets/FMMpic.PNG');

  // //   background-color: white;
  // //   width: 500px;
  img {
    //  margin-top: 50px;
    width: 100%;
    height: 100%;
    //   z-index: 0;
    // background-image: url(${fmmpic});

    //  display: block;
    // width: 100vw;
    // height: 100vh;
    // object-fit: cover;
    // object-fit: scale-down;
    // object-fit: contain;
    // background-size:  contain;
    // background-size: contain;
    //   background-repeat:   no-repeat;
    //   background-position: center center;
  }
`;

export const ProjectName = styled.div`
  grid-area: ProjectName;

  //   display: flex;
  //   justify-content: left;
  //   margin: 2% 0 0 8%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1cm;
  font-weight: bolder;
  text-decoration: underline;
`;

export const Description = styled.div`
  grid-area: Description;
`;
