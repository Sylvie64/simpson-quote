import React from 'react';


function DisplaySimpson({ character }) {
  return (
    <div className="DisplaySimpson">
      <img
        src={character.image}
        alt={character.character}
      />
      <ul>
          <li>
          Name: {character.character}{' '}
          </li>
          <li>
          Citation: {character.quote}{' '}
          </li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;