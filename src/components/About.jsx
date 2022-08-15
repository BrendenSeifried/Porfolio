import React from 'react';

export default function About() {
  return (
    <>
      <h1>Bio</h1>
      <h2>Welcome to by portfolio site.</h2>
      <p>
        Hey there, thank you for taking time to check out this website! My
        coding journey began in 2013 when I was hired onto a Semi-Conductor
        company to code PLC (programable logic controllers). After completing
        the job I went back into the workforce as general labor but always
        considered going deeper into the software industry. In December of 2021
        I decided to take the plunge and return to the industry to become a
        web-developer.
      </p>

      <p>
        I joined the Alchemy Code Labs based in Portland, OR where I created
        multiple front and backend end web applications. Since graduating I have
        continued to learn best practices and standards in the software
        development world.
      </p>

      <p>
        Please take some time to explore this website and do not hesitate to
        contact me!{' '}
      </p>
      <p>Brenden Seifried </p>
      <p onClick={() => (window.location = 'mailto:brendenseifried@gmail.com')}>
        brendenseifried@gmail.com
      </p>
      <p
        onClick={() =>
          (window.location = 'https://www.linkedin.com/in/brendenseifried/')
        }
      >
        Linkedin
      </p>
      <p
        onClick={() => (window.location = 'https://github.com/BrendenSeifried')}
      >
        GitHub
      </p>
    </>
  );
}
