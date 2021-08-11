import React, { Component } from 'react';
import MovieList from './MovieList';

class MoviePage extends Component {
  render() {
    return (
      <div className='movie-page'>
        Movie Page
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;
