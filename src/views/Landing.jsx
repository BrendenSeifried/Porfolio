import React, { useState } from 'react';
import About from '../components/About';
import FMM from '../components/FMM';
import Forage from '../components/Forage';
import { CollapsedCards } from '../Styles/CollapsedCards';

import {
  GridContainer,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  Welcome,
  Bio,
  WholeSpace,
  ContactResume,
  Links,
  ProjectsTxt,
} from '../Styles/GridTwo';
import { FaParking, FaUserSecret } from 'react-icons/fa';
import { GiMagicShield } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';
import { usePageContext } from '../context/Pages';
import MarkIt from '../components/MarkIt';
import TopSecrets from '../components/TopSecrets';
import Resume from '../components/Resume';

export default function Landing() {
  const {
    expandOne,
    expandTwo,
    expandThree,
    expandFour,
    blur,
    projectOneClickHandler,
    projectTwoClickHandler,
    ProjectThreeClickHandler,
    ProjectFourClickHandler,
  } = usePageContext();

  return (
    <>
      <GridContainer>
        {blur && <WholeSpace />}
        {/* <Welcome>Welcome</Welcome> */}
        {/* <Links></Links> */}
        <ContactResume>
          <img src="https://imgur.com/a/NFwiwcw" alt="image" />
          {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
           */}

          <Resume />
        </ContactResume>

        {/* <ProjectsTxt>Projects</ProjectsTxt> */}

        <Bio>
          <About />
        </Bio>

        <CardOne onClick={projectOneClickHandler}>
          {expandOne ? (
            <CollapsedCards>
              <h1>Full-Metal-Messenger</h1>
              {''}
              <h2>
                <GiMagicShield size={150} />
              </h2>
              <h3>React | SupaBase | Chakra-UI | Netlify </h3>
            </CollapsedCards>
          ) : (
            <FMM />
          )}
        </CardOne>

        <CardTwo onClick={projectTwoClickHandler}>
          {expandTwo ? (
            <CollapsedCards>
              <h1>Forage Parking App</h1>
              {''}
              <h2>
                <FaParking size={150} />
              </h2>
              <h3>React | SupaBase | Netlify </h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardTwo>

        <CardThree onClick={ProjectThreeClickHandler}>
          {expandThree ? (
            <CollapsedCards>
              <h1>Mark-It</h1>
              {''}
              <h2>
                <BsShopWindow size={150} />
              </h2>
              <h3>React | SupaBase | MapBox | Netlify </h3>
            </CollapsedCards>
          ) : (
            <MarkIt />
          )}
        </CardThree>

        <CardFour onClick={ProjectFourClickHandler}>
          {expandFour ? (
            <CollapsedCards>
              <h1>Top-Secrets</h1>
              {''}
              <h2>
                <FaUserSecret size={150} />
              </h2>
              <h3>React | SQL | Heroku | Unit Testing</h3>
            </CollapsedCards>
          ) : (
            <TopSecrets />
          )}
        </CardFour>
      </GridContainer>
    </>
  );
}
