import './App.css';
// import Counter from './components/Counter';
import MoviePage from './context/MoviePage';
import React, { Component } from 'react';
import UserContext from './context/UserContext';

class App extends Component {
  state = {
    user: {
      name: 'Bob',
      age: 41,
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <div className='App'>
          <h1>React Hooks intro</h1>
          {/* <Counter /> */}
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
