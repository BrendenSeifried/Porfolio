import React from 'react';
import { CardContainer } from '../Styles/ProjectCards';
import { FaUserSecret, FaGithub } from 'react-icons/fa';
import { usePageContext } from '../context/Pages';

export default function TopSecrets() {
  const { projectFourClickHandler } = usePageContext();

  return (
    <CardContainer>
      <h2>Mark-It</h2>

      <h1>
        <FaUserSecret size={400} />
      </h1>

      <h3>
        Top Secrets is a project concerning security using authorize and
        authenticate. CRUD routes for signed in users secrets, allowing admin
        privileges to access all secrets. Utilizes Cookies, Tests, and JWT
        secrets.
      </h3>
      <p>
        <a href={'https://github.com/BrendenSeifried/top-secrets'}>
          <FaGithub size={200} />
        </a>
      </p>
      <button onClick={projectFourClickHandler}>GoBack</button>
    </CardContainer>
  );
}
