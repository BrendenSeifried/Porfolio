import { createContext, useContext, useState, useEffect } from 'react';

export const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [expandOne, setExpandOne] = useState(true);
  const [expandTwo, setExpandTwo] = useState(true);
  const [expandThree, setExpandThree] = useState(true);
  const [expandFour, setExpandFour] = useState(true);
  const [blur, setBlur] = useState(false);
  // const [opened, setOpened] = useState(false);

// const closeClickHandler = () => {
//    setExpandOne(true);
//     setExpandTwo(true);
//     setExpandThree(true);
//     setExpandFour(true);


//     setBlur(true); 
//     setOpened(false);

// }



  const projectOneClickHandler = () => {
    setExpandOne(!expandOne)  
    setBlur(!blur); 
    // setOpened(false);
  }
  
    const projectTwoClickHandler = () => {
    setExpandTwo(!expandTwo)  
    setBlur(!blur); 
    // setOpened(false);
  }

  const ProjectThreeClickHandler = () => {
    setExpandThree(!expandThree)  
    setBlur(!blur); 
    // setOpened(false);
  }

   const ProjectFourClickHandler = () => {
    setExpandFour(!expandFour)  
    setBlur(!blur); 
    // setOpened(false);
  }
 
 
  return (
    <PageContext.Provider
      value={{
        blur, setBlur,
 expandOne, projectOneClickHandler, expandTwo, setExpandTwo,projectTwoClickHandler, expandThree, ProjectThreeClickHandler, ProjectFourClickHandler, expandFour
      }}
    >
      {children}
    </PageContext.Provider>
  );
};


const usePageContext = () => {
  const data = useContext(PageContext);
  if (data === undefined) {
    throw new Error('Page ContextProvider not wrapped!');
  }
  return data;
};

export { PageProvider, usePageContext };
