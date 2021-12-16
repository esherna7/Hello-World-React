import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Garage from './Garage';
import Car from './Car';
import Football from './Football';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Garage />
    <Car color="red" />
    <Football />
  </React.StrictMode>,
  document.getElementById('root')
);
