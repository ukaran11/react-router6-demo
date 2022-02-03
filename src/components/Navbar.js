import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
  <div>
      <nav>
          <NavLink style={navLinkStyles} to='/'>
            Home
          </NavLink>
          <NavLink style={navLinkStyles} to='/about'>
            About
          </NavLink>
          <NavLink style={navLinkStyles} to='/products'>
            Products
          </NavLink>
      </nav>
  </div>
  );
};

export default Navbar;
