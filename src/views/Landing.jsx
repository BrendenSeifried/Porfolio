import React from 'react';
import About from '../components/About';
import FMM from '../components/FMM';
import Forage from '../components/Forage';
import LandingPage from '../components/LandingPage';
import { LandingBackground } from '../Styles/Home';
import { gridContainer } from '../Styles/Grid';

export default function Landing() {
  return (
    <>
      <gridContainer>
        <LandingBackground>
          <LandingPage />
          <About />
          <FMM />
          <Forage />
        </LandingBackground>
      </gridContainer>
    </>
  );
}
