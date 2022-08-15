import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function Forage() {
  return (
    <div>
      FMM
      <h2>Forage Parking App</h2>
      <h3>
        A mobile app for renting and leasing personal parking spaces. Utilizes
        MapBox to show a map of spaces. User can Both upload and find spots.
      </h3>
      <p>
        <a href={'https://github.com/Forage-Parking/Forage-Parking-App'}>
          <FaGithub />
        </a>
      </p>
      <p>
        <a href={'https://forage-parking.netlify.app/auth'}>
          <FaLink />
        </a>
      </p>
      {/* <image src={}/> */}
    </div>
  );
}
