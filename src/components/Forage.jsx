import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { usePageContext } from '../context/Pages';
import { FaParking } from 'react-icons/fa';

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
        <FaParking size={400} />
      </Photo>
      <Description>
        <h3>
          A mobile app for renting and leasing personal parking spaces. Utilizes
          MapBox to show a map of spaces. User can Both upload and find spots.
        </h3>
        <p>
          <a href={'https://github.com/Forage-Parking/Forage-Parking-App'}>
            <FaGithub size={200} />
          </a>
          <a href={'https://forage-parking.netlify.app/auth'}>
            <FaLink size={200} />
          </a>
        </p>
      </Description>
      <button onClick={projectTwoClickHandler}>GoBack</button>
    </PGContainer>
  );
}
