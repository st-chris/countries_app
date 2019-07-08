import React from 'react';
import { Switch } from 'react-router-dom';

import Header from './components/Header';
import NoMatch from './views/NoMatch';
import { MakeRoutes } from './makeRoutes';

import Home from './views/Home';
import Countries from './views/Countries';
import Country from './views/Country';
import List from './views/List';
import Facts from './views/Facts'

import './App.css';


const routes = [
  {
    path: "/",
    component: Home,
    exact: ""
  },
  {
    path: "/Home",
    component: Home,
    exact: ""
  },
  {
    path: "/Countries",
    component: Countries,
    exact: ""
  },
  {
    path: "/countries/:letter",
    component: Countries,
    exact: ""
  },
  {
    path: "/countries/:letter/:country",
    component: Country,
    exact: ""
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/facts",
    component: Facts
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: NoMatch,
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: NoMatch,
  }
];

export const Routes = (props) => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            {
              routes.map(
                (route, index) => <MakeRoutes key={index} {...route} {...props} />
              )
            }
          </Switch>
        </div>
      </div>
    </div>
  );
};