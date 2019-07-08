import React from 'react';

const Country = ({ data, match, history }) => {
  
  const ctrData = data.find(country => country.alpha2Code === match.params.country);

  const goBack = () => history.goBack();
  if(!ctrData) {
    return <div><h3>Country not found  <button onClick={goBack} className="btn">Go back..</button></h3></div>
  } else {
    return (
      <div>
        <h3><button onClick={goBack} className="btn">Go back..</button></h3>
        <div className="ctr-container">
          <div className="ctr-grid-container">
            <div className="ctr-item-head"><span><h1>{ctrData.name} ({ctrData.region})</h1> {ctrData.nativeName}</span></div>
            <div className="ctr-item"><img src={ctrData.flag} alt={ctrData.name} /></div>
            <div className="ctr-item"><span>Population: <h2>{ctrData.population.toLocaleString('en')}</h2></span></div>
            <div className="ctr-item"><span>Capital: <h2>{ctrData.capital}</h2></span></div>
            <div className="ctr-item"><span>Language(s): <br/><h2>
            {ctrData.languages.map((language, index) => {
              return index > 0 ? ', ' + language.name : language.name;
            })}</h2></span></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Country;