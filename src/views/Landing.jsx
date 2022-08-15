import React from 'react';
import About from '../components/About';
import LandingPage from '../components/LandingPage';
import { LandingBackground } from '../Styles/Home';

export default function Landing() {
  return (
    <>
      <LandingBackground>
        <LandingPage />
        <About />
      </LandingBackground>
    </>
  );
}
