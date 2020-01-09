import React, { useState, Component } from 'react';
import Axios from 'axios';
import './Search.css';

const apiUrl = 'https://api.unsplash.com';
const apiKey =
  '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {};

  render() {
    return (
      <div>
        <main>
          <div className='Search'>
            <div className='heading'>
              <h1>Splash</h1>
              <p>Download Free High Quality Images</p>
            </div>
            <div className='Search-Form'>
              <form onSubmit={this.handleSubmit}>
                <input
                  className='search'
                  type='search'
                  name='search'
                  value={'value'}
                  onChange={this.handleChange}
                  placeholder='Search for high-resolution images'
                />
                <button className='submit-btn' type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Search;
