import React from 'react'
import { AboutContainer, LandingBackground } from '../Styles/LandingStyle'
// import styles from '../Styles/AboutMe.css'


export default function About() {
  return (
    <>
    {/* // <div className={styles.testContainer}> */}
    <LandingBackground>test</LandingBackground>
    <AboutContainer>
    <h1 >About Me</h1>
    <h2>Brenden Seifried:</h2>
    <h3>Full-Stack Software Engineer</h3>
    <p>React, JavaScript, CSS, HTML, Backend Development</p>
    </AboutContainer>
    </>
  )
}
