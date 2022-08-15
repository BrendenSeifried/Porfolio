import React from 'react';
import { AboutContainer } from '../Styles/Home';
// import styles from '../Styles/AboutMe.css'
import { FaGithub } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <>
      {/* // <div className={styles.testContainer}> */}
      {/* <LandingBackground>test</LandingBackground> */}
      <AboutContainer>
        <h2>
          Brenden Seifried: <FaGithub />
        </h2>
        <h3>Full-Stack Software Engineer</h3>
        <p>React, JavaScript, CSS, HTML, Backend Development</p>
      </AboutContainer>
    </>
  );
}
