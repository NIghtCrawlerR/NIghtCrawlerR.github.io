import React, { Component } from 'react';
import Header from './Header/Header';
import MoviesList from './MoviesList/MoviesList';

import './Main.css';


class App extends Component {
  
  render() {
    return (
      <div className="MainWrap">
        <Header name="Movie Database" />
        <MoviesList/>
      </div>
    );
  }
}

export default App;
