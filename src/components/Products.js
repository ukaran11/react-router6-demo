import React from 'react';
import { Link } from 'react-router-dom';
export const Products = () => {
  return (
    <>
        <div>
            <input type='search' placeholder='Search Products' />
        </div>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
    </>
  );
};
