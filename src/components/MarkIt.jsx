import React from 'react';
import { BsShopWindow } from 'react-icons/bs';
import { usePageContext } from '../context/Pages';
import { CardContainer } from '../Styles/ProjectCards';
import { FaGithub, FaLink } from 'react-icons/fa';
import { RiPictureInPictureExitFill } from 'react-icons/ri';
import {
  PGContainer,
  Photo,
  ProjectName,
  Description,
  ProjectLinks,
} from '../Styles/ProjectGrid';
import fmmpic from '../assets/FMMpic.png';

export default function MarkIt() {
  const { ProjectThreeClickHandler } = usePageContext();

  return (
    <PGContainer>
      <ProjectName>Mark-It</ProjectName>
      <Photo>
        <img src={fmmpic} />
      </Photo>
      <Description>
        <h3>
          An App created to reserve select items at a local Sunday market. Shows
          vendors items availability and allows the user to create an account
          and reserve items of their choosing. Many to many tables created using
          Supabase.
        </h3>
      </Description>

      <ProjectLinks>
        <p>
          React | SupaBase | Netlify
          <a href={'https://github.com/Mark-it-Team/markit-team-project'}>
            <FaGithub size={80} />
          </a>
          <a
            href={
              'https://deploy-preview-123--wizardly-johnson-11e23c.netlify.app'
            }
          >
            <FaLink size={80} />
          </a>
        </p>
      </ProjectLinks>
      {/* <button onClick={ProjectThreeClickHandler}> */}
      <RiPictureInPictureExitFill
        onClick={ProjectThreeClickHandler}
        size={50}
      />
      {/* </button> */}
    </PGContainer>
  );
}
