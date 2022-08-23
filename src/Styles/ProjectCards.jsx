import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgb(42, 53, 100);
  border-radius: 8%;
  display: grid;
  padding-left: 4rem;
  padding-right: 4rem;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;



// margin-top: 25px;
//     font-size: 21px;
//     text-align: center;

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
