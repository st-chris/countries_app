import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ data }) => {
 
  // Get unique values from array
  const uniqVal = (arr) => {
    const uniqArr = arr.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue);
        }
        return accumulator
      }, [])

    return uniqArr;
  };

  // Get regions
  let regions = [];
  for (let i in data) { 
    regions.push(data[i].region ? data[i].region : "No region");
  };
  regions = uniqVal(regions).sort();
  // Create ddl option for each region
  let optionItems = regions.map((region, index) => <option key={index} value={region}>{region}</option>);

  // Sort - Ascending
  const sortAsc = (event) => {
    const value = event.currentTarget.value;
    const region = document.getElementById("ddlRegion").value;

    if(region === 'allregions') {
      const input = data.sort((a, b) => a[value] - b[value]);
      mapData(input);
    } else {
      const input = data.filter((country) => country.region === region).sort((a, b) => a[value] - b[value]);
      mapData(input);
    }
  };

  // Sort - Descending
  const sortDesc = (event) => {
    const value = event.currentTarget.value;
    const region = document.getElementById("ddlRegion").value;

    if(region === 'allregions') {
      const input = data.sort((a, b) => b[value] - a[value]);
      mapData(input)
    } else {
      const input = data.filter((country) => country.region === region).sort((a, b) => b[value] - a[value]);
      mapData(input);
    }
  };

  // Filtering
  const filterList = () => {
    const region = document.getElementById("ddlRegion").value;
    if(region === 'allregions') {
      mapData();
    } else {
      const input = data.filter((country) => country.region === region);
      mapData(input);
    }
  };

  // Data map & show
  const mapData = (input) => {
    let str = "";
    (input ? input : data).map((country, index) => {
      str += `<tr key=${index}>
                <td class="c1"><img src=${country.flag} width="15px" alt=${country.name} /></td>
                <td><a href="/countries/${country.name.charAt(0)}/${country.alpha2Code}">${country.name}</a></td>
                <td>${country.region}</td>
                <td class="c-m">${country.population.toLocaleString('en')}</td>
                <td class="c-m">${country.area ? country.area.toLocaleString('en') : "n/a"}</td>
              </tr>`
      return str;
    })
    document.getElementById("hier").innerHTML = str;
  };

  // Initial map & show
  const showList = () => {
    return data.map((country, index) => {
      return (
        <tr key={index}>
          <td className="c1"><img src={country.flag} width="15px" alt={country.name} /></td>
          <td><Link to={`/countries/${country.name.charAt(0)}/${country.alpha2Code}`}>{country.name}</Link></td>
          <td>{country.region ? country.region : country.region = "No region"}</td>
          <td className="c-m">{country.population.toLocaleString('en')}</td>
          <td className="c-m">{country.area ? country.area.toLocaleString('en') : "n/a"}</td>
        </tr>
      )
    })
  };

  return (
    <div className="ctr-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>
              <label>
                <select id="ddlRegion" className="select" onChange={filterList}>
                  <option value="allregions">All Regions</option>
                  {optionItems}
                </select>
              </label>
            </th>
            <th className="c-m"><button value="population" onClick={sortAsc}>↑</button> Population <button value="population" onClick={sortDesc}>↓</button></th>
            <th className="c-m"><button value="area" onClick={sortAsc}>↑</button> Area (km2)<button value="area" onClick={sortDesc}>↓</button></th>
          </tr>
        </thead>
        <tbody id="hier">
          {showList()}
        </tbody>
      </table>
    </div>
  );
};

export default List;