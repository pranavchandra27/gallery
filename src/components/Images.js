import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-component';
import Axios from 'axios';
import Image from './Image';
import { ImageContext } from '../contexts/ImageContext';
import './Images.css';

const apiUrl = 'https://api.unsplash.com';
const apiKey =
  '1ec894e114e534ccb5780f624e4ab05461e5c60b29496f45f92c4127efbe1ddb';

class Images extends Component {
  static contextType = ImageContext;
  state = {
    images: [],
    page: 1,
    perPage: 30,
    value: ''
  };

  componentDidMount() {
    this.loadMoreImages();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.loadSearchImages();
  };

  loadMoreImages = () => {
    const { images, page, perPage } = this.state;
    Axios.get(
      `${apiUrl}/photos?client_id=${apiKey}&page=${page}&per_page=${perPage}`
    )
      .then(res => {
        this.setState({ images: images.concat(res.data) });
      })
      .catch(err => console.log(err));
  };

  loadSearchImages = () => {
    const { images, page, perPage, value } = this.state;
    this.setState({ images: [] });
    Axios.get(
      `${apiUrl}/search/photos?client_id=${apiKey}&page=${page}&per_page=${perPage}&query=${value}`
    )
      .then(res => {
        this.setState({ images: images.concat(res.data.results) });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  loadNewImages = () => {
    this.setState({ page: this.state.page + 1 });
    this.loadMoreImages();
  };

  render() {
    const { images } = this.state;
    return (
      <div className='Images'>
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
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                  placeholder='Search for high-resolution images'
                />
                <button className='submit-btn' type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
        </main>
        <InfiniteScroll
          dataLength={images.length}
          hasMore={true}
          next={this.loadNewImages}
          loader={
            <div className='loader'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Ajax_loader_metal_512.gif'
                alt='loader'
              />
            </div>
          }
        >
          <Masonry elementType={'ul'} options={{ gutter: 15 }}>
            {images.map(image => (
              <li key={image.id}>
                <Image image={image} />
              </li>
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
