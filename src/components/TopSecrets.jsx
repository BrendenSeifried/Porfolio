import React from 'react';
import { CardContainer } from '../Styles/ProjectCards';
import { FaUserSecret, FaGithub } from 'react-icons/fa';
import { RiPictureInPictureExitFill } from 'react-icons/ri';

import { usePageContext } from '../context/Pages';
import {
  PGContainer,
  Photo,
  ProjectName,
  Description,
} from '../Styles/ProjectGrid';
import fmmpic from '../assets/FMMpic.png';

export default function TopSecrets() {
  const { ProjectFourClickHandler } = usePageContext();

  return (
    <PGContainer>
      <ProjectName>Mark-It</ProjectName>

      <Photo>
        <img src={fmmpic} />
      </Photo>
      <Description>
        <h3>
          Top Secrets is a project concerning security using authorize and
          authenticate. CRUD routes for signed in users secrets, allowing admin
          privileges to access all secrets. Utilizes Cookies, Tests, and JWT
          secrets.
        </h3>
        <p>
          <a href={'https://github.com/BrendenSeifried/top-secrets'}>
            <FaGithub size={100} />
          </a>
        </p>
      </Description>
      <RiPictureInPictureExitFill onClick={ProjectFourClickHandler} size={50} />
    </PGContainer>
  );
}
