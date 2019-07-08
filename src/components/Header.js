import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Countries App</h1>
      <Link style={linkStyle} to="/Home">Home</Link> | <Link style={linkStyle} to="/countries">Country index</Link> | <Link style={linkStyle} to="/list">Country list</Link> | <Link style={linkStyle} to="/facts">Facts</Link>
    </header>
  )
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
