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
import { FaParking, FaUserSecret } from 'react-icons/fa';
import { GiMagicShield } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';

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

        <CardOne onClick={() => setExpand(!expand)}>
          {expand ? (
            <CollapsedCards>
              <h1>Full-Metal-Messenger</h1>
              {''}
              <h2>
                <FaParking size={200} />
              </h2>
              <h3>React | SupaBase | Chakra-UI | Netlify | 3-Person Team</h3>
            </CollapsedCards>
          ) : (
            <FMM />
          )}
        </CardOne>

        <CardTwo onClick={() => setExpand(!expand)}>
          {expand ? (
            <CollapsedCards>
              <h1>Forage Parking App</h1>
              {''}
              <h2>
                <GiMagicShield size={200} />
              </h2>
              <h3>React | SupaBase | Netlify | 4-Person Team</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardTwo>

        <CardThree onClick={() => setExpand(!expand)}>
          {expand ? (
            <CollapsedCards>
              <h1>Mark-It</h1>
              {''}
              <h2>
                <BsShopWindow size={200} />
              </h2>
              <h3>React | SupaBase | MapBox | Netlify | 4-Person Team</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardThree>

        <CardFour onClick={() => setExpand(!expand)}>
          {expand ? (
            <CollapsedCards>
              <h1>Top-Secrets</h1>
              {''}
              <h2>
                <FaUserSecret size={200} />
              </h2>
              <h3>React | SQL | Heroku</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardFour>
        {/* </LandingBackground> */}
      </GridContainer>
    </>
  );
}
