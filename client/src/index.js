import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.js';
import rand from './randShoeSelector.js';

ReactDOM.render(
  <Gallery shoeID={rand} />,
  document.getElementById('root')
)