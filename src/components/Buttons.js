import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = (data) => {

  const letters = data
      .map(item => item.name.substring(0, 1))
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      }).sort()
  ;
  
  return letters.map((letter, index) => {
    return (
      <Link className="btn" key={index} to={`/countries/${letter}`}>{letter}</Link>
    )
  });
}

export default Buttons;