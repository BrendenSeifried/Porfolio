import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { CardContainer } from '../Styles/ProjectCards';
import { GiMagicShield } from 'react-icons/gi';
// import fmmimg from '../assets/FMMpic.PNG';
import fmmpic from '../assets/FMMpic.png';

import { usePageContext } from '../context/Pages';
import {
  PGContainer,
  Photo,
  ProjectName,
  Description,
} from '../Styles/ProjectGrid';

export default function FMM() {
  const { projectOneClickHandler, closeClickHandler } = usePageContext();
  return (
    // <CardContainer>
    //   <h2>Full-Metal-Messenger</h2>

    //   {/* <img>
    //     <GiMagicShield size={350} />
    //   </img> */}
    //   <image/>
    //   <h3>
    //     FMM is a real time messaging app. This App allows users with a valid
    //     account to enter a main lobby live chat. Users can create a private room
    //     and add other users to it via a side drawer showing all other accounts.
    //     This project was with a three person team during a week long sprint. FMM
    //     utilizes Charka-Ui for styling and SupaBase for functionality, created
    //     in React.
    //   </h3>
    //   <p>
    //     <a href={'https://github.com/Full-Metal-Messenger/FMMessenger'}>
    //       <FaGithub size={100} />
    //     </a>
    //     <a href={'https://fm-messenger.netlify.app/auth'}>
    //       <FaLink size={100} />
    //     </a>
    //   </p>
    //   <button onClick={projectOneClickHandler}>Close</button>
    // </CardContainer>

    <PGContainer>
      <ProjectName>Full-Metal-Messenger</ProjectName>

      <Photo>
        <img src={fmmpic} />
      </Photo>
      {/* <GiMagicShield size={250} /> */}
      {/* </Photo> */}
      <Description>
        <h3>
          FMM is a real time messaging app. This App allows users with a valid
          account to enter a main lobby live chat. Users can create a private
          room and add other users to it via a side drawer showing all other
          accounts. This project was with a three person team during a week long
          sprint. FMM utilizes Charka-Ui for styling and SupaBase for
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
      </Description>
      <button onClick={closeClickHandler}>Close</button>
    </PGContainer>
  );
}
