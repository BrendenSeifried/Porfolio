import styled from 'styled-components';
import fmmpic from '../assets/FMMpic.png';

export const PGContainer = styled.div`
  z-index: 2;

  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.1fr;
  grid-template-rows: 0.1fr 1fr 1fr 1fr 1fr 1fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . . . . .'
    '. ProjectName ProjectName ProjectName ProjectLinks ProjectLinks ProjectLinks ProjectLinks .'
    '. . . . Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. . . . . . . . .';

  //////////////OLD////////////
  // display: grid;
  // grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 0.1fr;
  // grid-template-rows: 0.1fr 1fr 1fr 1fr 0.1fr;
  // gap: 0px 0px;
  // grid-auto-flow: row;
  // grid-template-areas:
  //   '. . . . . .'
  //   '. ProjectName ProjectName Photo Photo .'
  //   '. Description Description Photo Photo .'
  //   '. Description Description Photo Photo .'
  //   '. . . . . .';
  ////////////////OLD/////////////////////
  height: 85vh;
  width: 70%;
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
  top: 8%;
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
  border: 3px solid white;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectName = styled.div`
  grid-area: ProjectName;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1cm;
  font-weight: bolder;
  text-decoration: underline;
`;

export const Description = styled.div`
  margin-right: 8%;
  padding-top: -25%;
  height: 90%;
  radius: 10px;
  grid-area: Description;
  // background-color: #b17844;
  // height: 200%;
  margin-top: -20%;
  // margin-bottom: 50%;
  // margin-right: 14.5%;
  // border: 5px solid black;

  h3 {
    margin-top: 25%;
    // background-color: #b17844;
    radius: 5px;
    box-shadow: 5px 10px rgba(8, 1, 1, 0.616);
    padding: 2px;

    border: 5px solid black;
    border-radius: 10px;

    font-size: 1.5rem;

    // margin: 20% 0;
    // margin-top: 20%;
    // margin-bottom: 5%;
    // border: 5px solid black;
  }
`;

export const ProjectLinks = styled.div`
  grid-area: ProjectLinks;
  display: flex;
  flex-direction: row;
  overflow: visible;

  p {
    font-size: 1.5rem;
    font-weight: bolder;
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 20%;
    border-bottom: 5px double white;
    padding-bottom: 2%;
    width: 200%;
    overflow: visible;
  }
  a {
    color: inherit;
    margin: 3%;
  }

  a:hover,
  a:focus {
    opacity: 0.75;
    color: inherit;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;
