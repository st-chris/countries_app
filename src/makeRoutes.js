import React from 'react';
import { Route } from 'react-router-dom';
import CountriesApi from './components/Api';

export const MakeRoutes = route => {

  const { data, isLoading, isError } = CountriesApi(
    `https://restcountries.eu/rest/v2/all`
  );

  return (
    <div>{isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading data...</div>
      ) : ( 
    <Route
      path={route.path}
      render={props => (
        <route.component { ...props} data={data} routes={route.routes} />
      )}
    />
      )}</div>
  );
}