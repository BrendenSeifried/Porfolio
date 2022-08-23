import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { CardContainer, Logo } from '../Styles/ProjectCards';
import { GiMagicShield } from 'react-icons/gi';

// import '../assets/FMMpic.PNG';
// import { test } from '../assets/FMMpic.PNG';

export default function FMM(expandOne, setExpandOne) {
  return (
    <CardContainer>
      <h2>Full-Metal-Messenger</h2>
      {/* <Logo src={test} /> */}
      {/* <Logo> */}
      <h1>
        <GiMagicShield size={400} />
      </h1>
      {/* </Logo> */}

      {/* <img src={test} alt="" /> */}

      <h3>
        A real time messaging app. This App allows users to create private chat
        rooms once signed up. Utilizes Charka-Ui for design and SupaBase for
        functionality, created in React.
      </h3>
      <p>
        <a href={'https://github.com/Full-Metal-Messenger/FMMessenger'}>
          <FaGithub size={200} />
        </a>
        <a href={'https://fm-messenger.netlify.app/auth'}>
          <FaLink size={200} />
        </a>
      </p>
      <button onClick={setExpandOne(!expandOne)}>GoBack</button>
    </CardContainer>
  );
}
