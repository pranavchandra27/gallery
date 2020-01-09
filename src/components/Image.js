import React from 'react';
import './Image.css';

function Image(props) {
  const { image } = props;
  return (
    <a href={image.links.download}>
      <img
        className='Image'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </a>
  );
}

export default Image;
