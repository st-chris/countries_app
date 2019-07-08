import React from 'react';

const Buttons = (data) => {

  const letters = data
      .map(item => item.name.substring(0, 1))
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      }).sort();
  
  return letters.map((letter, index) => {
    return (
      <a className="btn" key={index} href={"/countries/" + letter}>{letter}</a> 
    )
  });
}

export default Buttons;