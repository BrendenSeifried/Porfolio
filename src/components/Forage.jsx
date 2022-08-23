import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { usePageContext } from '../context/Pages';
import { FaParking } from 'react-icons/fa';
import { CardContainer } from '../Styles/ProjectCards';

export default function Forage() {
  const { projectTwoClickHandler } = usePageContext();

  return (
    <CardContainer>
      <h2>Forage Parking App</h2>

      <h1>
        <FaParking size={400} />
      </h1>

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
      <button onClick={projectTwoClickHandler}>GoBack</button>
    </CardContainer>

    // <div>
    //   FMM
    //   <h2>Forage Parking App</h2>
    //   <h3>
    //     A mobile app for renting and leasing personal parking spaces. Utilizes
    //     MapBox to show a map of spaces. User can Both upload and find spots.
    //   </h3>
    //   <p>
    //     <a href={'https://github.com/Forage-Parking/Forage-Parking-App'}>
    //       <FaGithub />
    //     </a>
    //   </p>
    //   <p>
    //     <a href={'https://forage-parking.netlify.app/auth'}>
    //       <FaLink />
    //     </a>
    //   </p>
    //   {/* <image src={}/> */}
    // </div>
  );
}
