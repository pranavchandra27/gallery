import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='Navbar'>
          <Link className='logo' to='#'>
            <h1>Splash</h1>
          </Link>
          <ul className='nav-links'>
            <li className='links'>
              <Link to='#'>wallpaper</Link>
            </li>
            <li className='links'>
              <Link to='#'>landscape</Link>
            </li>
            <li className='links'>
              <Link to='#'>cityscape</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
