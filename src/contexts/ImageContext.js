import React, { Component, createContext } from 'react';

export const ImageContext = createContext();

export class ImageProvider extends Component {
  state = {
    images: [],
    page: 1
  };

  addImages = data => {
    this.setState({ images: this.state.images.concat(data) });
  };

  addPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, page } = this.state;
    return (
      <ImageContext.Provider
        value={{
          images,
          page,
          addImages: this.addImages,
          pageNumInc: this.addPage
        }}
      >
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
