import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Images from './components/Images';
import { ImageProvider } from './contexts/ImageContext';

function App() {
  return (
    <Router>
      <ImageProvider>
        <Navbar />
        <Images />
      </ImageProvider>
    </Router>
  );
}

export default App;
