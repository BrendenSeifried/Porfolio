import styled from 'styled-components';
// import appImg from `../assets/${tag}`
// import test from '../assets/FMMpic.PNG';

export const CardContainer = styled.div`

height: 95vh;
margin-bottom: 10%;
  // background-color: rgb(42, 53, 100);
   background-color: rgb(15, 1, 75);

  border-radius: 2%;
  display: grid;
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

  Logo {
    //  margin-top: 50px;
    width: 200px;
    height: 200px;
  }
  h1 {
    border-bottom: 8px double white;
  }
  h2 {
    display: flex;
    justify-content: left;
    margin: 2% 0 0 8%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1cm;
    font-weight: bolder;
    text-decoration: underline;
  }
  h3 {
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-size: 1.2cm;
    // width: 90%;
    left: 10%;
  }
  a {
    color: inherit;
    margin: 80px;
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

button {
//  overflow: hidden;
//   display:flex;
//   justify-content: right;
//   font-size: 1.2cm;
//       background-color: #222;
//       border-radius: 4px;
//       border-style: none;
//       box-sizing: border-box;
//       color: white;
//       cursor: pointer;
//       display: inline-block;
//       font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
//       line-height: 1.5;
//       margin: 0;
//       max-width: none;
//       min-height: 44px;
//       min-width: 10px;
//       outline: none;
//       overflow: hidden;
//       padding: 9px 20px 8px;
//       position: relative;
//       text-align: center;
//       text-transform: none;
//       user-select: none;
//       -webkit-user-select: none;
//       touch-action: manipulation;
//       width: 20%;
//       height: 120%;
//       border-top: 2px solid white;
//       border-right: 2px solid white;
    }

    button:hover,
    button:focus {
      opacity: 0.75;
    }
  }
`;
