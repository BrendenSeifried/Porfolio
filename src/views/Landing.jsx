import React from 'react';
import About from '../components/About';
import { LandingBackground } from '../Styles/LandingStyle';

export default function Landing() {
  return (
    <>
      <LandingBackground>
        <About />
        test
      </LandingBackground>
    </>
  );
}
