import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { usePageContext } from '../context/Pages';
import foragepic from '../assets/Foragepic.png';
import { RiPictureInPictureExitFill } from 'react-icons/ri';

import {
  PGContainer,
  Photo,
  ProjectName,
  Description,
} from '../Styles/ProjectGrid';

export default function Forage() {
  const { projectTwoClickHandler } = usePageContext();

  return (
    <PGContainer>
      <ProjectName>Forage Parking App</ProjectName>

      <Photo>
        <img src={foragepic} />
      </Photo>
      <Description>
        <h3>
          A mobile parking app. It allows renting and leasing personal parking
          spaces. There is a usable map showing locations. Prices size and
          location can all be set by vendors. This project was created in React
          using Supabase and mapbox.
        </h3>
        <p>
          <a href={'https://github.com/Forage-Parking/Forage-Parking-App'}>
            <FaGithub size={100} />
          </a>
          <a href={'https://forage-parking.netlify.app/auth'}>
            <FaLink size={100} />
          </a>
        </p>
      </Description>
      <RiPictureInPictureExitFill onClick={projectTwoClickHandler} size={50} />
    </PGContainer>
  );
}
