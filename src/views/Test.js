import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestCountry = ({ match }) => {

  const [ahType, setAhType] = useState([]);
  useEffect(() => {
    axios.get()
      .then(res => setAhType(res.data._embedded.lanes[4]._embedded.items[0]._embedded.filters[0]._embedded.filterItems.filter((value, index) => index < 6)))
  }, []);
  console.log(ahType);

}
