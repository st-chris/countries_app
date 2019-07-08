import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';

const Countries = ({ match, data }) => {
  

  const showIndex = () => {
    if(match.params.letter) {
      return data.filter(country => country.name.startsWith(match.params.letter)).map((country, index) => {
        return (
          <li key={index}>
          <img src={country.flag} width="15px" alt={country.name} /> <Link to={`${match.url}/${country.alpha2Code}`}>{country.name}</Link>
          </li>
        )
      })
    } else {
      return data.map((country, index) => {
        return (
          <li key={index}>
            <img src={country.flag} width="15px" alt={country.name} /> <Link to={`${match.url}/${country.name.charAt(0)}/${country.alpha2Code}`}>{country.name}</Link>
          </li>
        )
      })
    }
  };

  return (
    <div>
      {Buttons(data)}
      <div className="countries">
        <ul>
          { showIndex() }
        </ul>
      </div>
    </div>
  );
};

export default Countries;