import React from 'react';

import CountriesApi from '../components/Api';


const Facts = (props) => {

  const ctrData = props.data;
  const { data, isLoading, isError } = CountriesApi(
    `https://ipapi.co/country`,
    []
  );
  

  // Find country info on alpha2 from IP
  const ipCountry = !isLoading ? ctrData.find(country => country.alpha2Code === data) : {
    "name": "",
    "flag": "",
    "area": ""
  };

  // Find country with max pop. / area
  const findMinMax = (arr, value) => {
    let max = arr[0][value], maxArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let val = arr[i][value];
      let curArr = arr[i];
      // max = (v > max) ? v : max;
      if(val > max) {
        max = val;
        maxArr = curArr;
      }
      // maxn = (v > max) ? name : maxn;
    }
    return maxArr;
  }

  // Store country info in variable
  let bigPop = !isLoading ? findMinMax(ctrData, 'population') : "";
  let bigArea = !isLoading ? findMinMax(ctrData, 'area') : "";

  const popComp = `${bigPop.name} has ${(bigPop.population / ipCountry.population).toFixed()} times more inhabitants than ${ipCountry.name}.`;
  const areaComp = `${bigArea.name} is ${(bigArea.area / ipCountry.area).toFixed()} times bigger than ${ipCountry.name} (in km2).`;
  
  return (
    <div>
      {isError && <div>Something went wrong..</div>}
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <div className="ctr-container">
          <section className="fct-grid-container">
            <div className="fct-item-head"><span><h1>Facts</h1></span></div>
            <div className="fct-item"><b>Your country (IP):</b></div>
            <div className="fct-item"><img src={ipCountry.flag} alt={ipCountry.name} /></div>
            <div className="fct-item"><span><h2>{ipCountry.name}</h2>Population: {ipCountry.population.toLocaleString('en')} <br />Area: {ipCountry.area.toLocaleString('en')} km2</span></div>
            <div className="fct-item"><b>Biggest country in population:</b></div>
            <div className="fct-item"><img src={bigPop.flag} alt={bigPop.name} /></div>
            <div className="fct-item"><span><h2>{bigPop.name}</h2>{bigPop.population.toLocaleString('en')}</span></div>
            <div className="fct-item-ft"><em>{popComp}</em></div>
            <div className="fct-item"><b>Biggest country in area (km2):</b></div>
            <div className="fct-item"><img src={bigArea.flag} alt={bigArea.name} /></div>
            <div className="fct-item"><span><h2>{bigArea.name}</h2>{bigArea.area.toLocaleString('en')} km2</span></div>
            <div className="fct-item-ft"><em>{areaComp}</em></div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Facts;