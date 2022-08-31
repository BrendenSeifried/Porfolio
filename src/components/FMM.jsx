import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { CardContainer } from '../Styles/ProjectCards';
import { GiMagicShield } from 'react-icons/gi';
import { usePageContext } from '../context/Pages';

export default function FMM() {
  const { projectOneClickHandler } = usePageContext();
  return (
    <CardContainer>
      <h2>Full-Metal-Messenger</h2>

      <h1>
        <GiMagicShield size={250} />
      </h1>

      <h3>
        A real time messaging app. This App allows users to create private chat
        rooms once signed up. Utilizes Charka-Ui for design and SupaBase for
        functionality, created in React.
      </h3>
      <p>
        <a href={'https://github.com/Full-Metal-Messenger/FMMessenger'}>
          <FaGithub size={100} />
        </a>
        <a href={'https://fm-messenger.netlify.app/auth'}>
          <FaLink size={100} />
        </a>
      </p>
      <button onClick={projectOneClickHandler}>Close</button>
    </CardContainer>
  );
}
