import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function FMM() {
  return (
    <div>
      FMM
      <h2>Full-Metal-Messenger</h2>
      <h3>
        A real time messaging app. This App allows users to create private chat
        rooms once signed up. Utilizes Charka-Ui for design and SupaBase for
        functionality, created in React.
      </h3>
      <p>
        <a href={'https://github.com/Full-Metal-Messenger/FMMessenger'}>
          <FaGithub />
        </a>
      </p>
      <p>
        <a href={'https://fm-messenger.netlify.app/auth'}>
          <FaLink />
        </a>
      </p>
    </div>
  );
}
