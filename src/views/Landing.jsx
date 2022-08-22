import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import FMM from '../components/FMM';
import Forage from '../components/Forage';
import LandingPage from '../components/LandingPage';
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
} from '../Styles/GridTwo';
import { LandingBackground } from '../Styles/Home';
import { FaParking } from 'react-icons/fa';

export default function Landing() {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <GridContainer>
        <WholeSpace></WholeSpace>
        {/* <LandingBackground> */}
        <Welcome>Welcome</Welcome>
        <Links></Links>
        <ContactResume>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </ContactResume>
        {/* <LandingPage /> */}
        <Bio>
          <About />
        </Bio>
        {/* <CardOne>
          <Link to="/FMM">
            <FMM />
          </Link>
        </CardOne> */}

        <CardOne onClick={() => setExpand(!expand)}>
          {expand ? (
            <CollapsedCards>
              <h1>Full-Metal-Messenger</h1>
              {''}
              <h2>
                <FaParking size={200} />
              </h2>
            </CollapsedCards>
          ) : (
            <FMM />
          )}
        </CardOne>

        <CardTwo>
          <Forage />
        </CardTwo>
        <CardThree></CardThree>
        <CardFour></CardFour>
        {/* </LandingBackground> */}
      </GridContainer>
    </>
  );
}
