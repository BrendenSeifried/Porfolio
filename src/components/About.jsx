import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { usePageContext } from '../context/Pages';
import { AboutMe, Links } from '../Styles/AboutMe';
import { WholeSpace } from '../Styles/GridTwo';

export default function About() {
  return (
    <>
      <AboutMe>
        <h2>Welcome to by portfolio site.</h2>
        <p>
          Hey there, thank you for taking time to check out this website! My
          coding journey began in 2013 when I was hired onto a Semi-Conductor
          company to code PLC (programable logic controllers). After completing
          the job I went back into the workforce as general labor but always
          considered going back into software development. In December of 2021 I
          decided to take the plunge and return to the industry to become a
          full-stack web-developer.
        </p>
        <p>
          I joined the Alchemy Code Labs based in Portland, OR where I created
          multiple front and backend end web applications. Since graduating I
          have continued to learn best practices and standards in the software
          development world.
        </p>
        <p>
          Please take some time to explore this website and do not hesitate to
          contact me!{' '}
        </p>
        <Links>
          <a href={'mailto:brendenseifried@gmail.com'}>
            brendenseifried@gmail.com
          </a>
          <a href={'https://www.linkedin.com/in/brendenseifried/'}>
            Linkedin
            {/* <FaExternalLinkAlt />{' '} */}
          </a>
          <a href={'https://github.com/BrendenSeifried'}>
            GitHub
            {/* <FaGithub /> */}
          </a>
          <a href={'https://www.canva.com/design/DAE_sMgAI6I/view'}>
            My Resume
          </a>
        </Links>
      </AboutMe>
    </>
  );
}
