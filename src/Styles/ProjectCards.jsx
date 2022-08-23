import styled from 'styled-components';
// import appImg from `../assets/${tag}`
// import test from '../assets/FMMpic.PNG';

export const CardContainer = styled.div`
  background-color: rgb(42, 53, 100);
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
  top: 7%;
  left: 12%;
  bottom: 7%;
  right: 12%;
  overflow: auto;
  font-size: 21px;
  text-align: center;

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
    // border: 5px solid black;
    // border-style: 0 0 solid 0;
    border-bottom: 8px double white;
  }
  h2 {
    display: flex;
    justify-content: left;
    margin: 2% 0 0 8%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2cm;
    font-weight: bolder;
    text-decoration: underline;
  }
  h3 {
    display: flex;
    // justify-content: center;
    // text-align: center;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2cm;
    // width: 90%;
    left: 10%;
  }
  a {
    
    margin: 80px;
  }
 a:hover,
    a:focus {
      opacity: 0.75;
    }
 

button {
  font-size: 1.2cm;
      background-color: #222;
      border-radius: 4px;
      border-style: none;
      box-sizing: border-box;
      color: white;
      cursor: pointer;
      display: inline-block;
      font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
      margin: 0;
      max-width: none;
      min-height: 44px;
      min-width: 10px;
      outline: none;
      overflow: hidden;
      padding: 9px 20px 8px;
      position: relative;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 20%;
      height: 120%;
    }

    button:hover,
    button:focus {
      opacity: 0.75;
    }
  }
`;

// export const Logo = styled.img`
//    {

//   }
// `;
