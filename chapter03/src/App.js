import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import './App.css';

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div className="app-container">
        <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button>

        <div className="ratings-section">
          <Rating rating="1" />
          <Rating rating="2" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />
        </div>
      </div>
    );
  }
}

export default App;