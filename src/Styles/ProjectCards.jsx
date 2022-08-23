import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgb(42, 53, 100);
  border-radius: 8%;
  display: grid;
  // padding-left: 4rem;
  // padding-right: 400px;

  box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // width: 100px;
    // height: 100px;
    border: 300px blur(20px)
    // background: #00f;
    margin: 10px;
    // backdrop-filter: blur(10px);
    // filter: blur(10px);
  
  position: fixed;
  top: 7%;
  left: 10%;
  bottom: 7%;
  right: 10%;
  overflow: auto;
  font-size: 21px;
  text-align: center;

    -webkit-animation: fadein 2s; 
       -moz-animation: fadein 2s; 
        -ms-animation: fadein 2s;
         -o-animation: fadein 2s; 
            animation: fadein 2s;

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}



  h2{
    display: flex;
    justify content: left;

  }
`;
