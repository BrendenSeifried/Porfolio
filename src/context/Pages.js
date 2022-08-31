import { createContext, useContext, useState, useEffect } from 'react';

export const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [expandOne, setExpandOne] = useState(true);
  const [expandTwo, setExpandTwo] = useState(true);
  const [expandThree, setExpandThree] = useState(true);
  const [expandFour, setExpandFour] = useState(true);
  const [blur, setBlur] = useState(false);
  const [opened, setOpened] = useState(false);

const closeClickHandler = () => {
   setExpandOne(!expandOne)  
    setBlur(true); 
    setOpened(!opened);

}



  const projectOneClickHandler = () => {
     {opened ? '' :
    setExpandOne(!expandOne)  
    setBlur(!blur); }
    setOpened(!opened);
  }
  
    const projectTwoClickHandler = () => {
    setExpandTwo(!expandTwo);
    setBlur(!blur);
  }

  const ProjectThreeClickHandler = () => {
    setExpandThree(!expandThree);
    setBlur(!blur);
  }

   const ProjectFourClickHandler = () => {
    setExpandFour(!expandFour);
    setBlur(!blur);
  }
 
 
  return (
    <PageContext.Provider
      value={{
        blur, setBlur,
 expandOne, projectOneClickHandler, expandTwo, setExpandTwo,projectTwoClickHandler, expandThree, ProjectThreeClickHandler, ProjectFourClickHandler, expandFour, closeClickHandler
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
