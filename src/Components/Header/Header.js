import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar bg-light">
  <div className="container">
    <a className='navbar-brand' href='#'> <i className="fa-solid fa-house-medical text-primary"></i> Medi<strong className='text-primary'>Heal</strong></a>
  </div>
</nav>
        </div>
    );
};

export default Header;