import React from 'react';
import About from '../components/About';
import FMM from '../components/FMM';
import LandingPage from '../components/LandingPage';
import { LandingBackground } from '../Styles/Home';

export default function Landing() {
  return (
    <>
      <LandingBackground>
        <LandingPage />
        <About />
        <FMM />
      </LandingBackground>
    </>
  );
}
