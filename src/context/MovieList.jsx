import React, { Component } from 'react';
import UserContext from './UserContext';

class MovieList extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <div>
            <h3>MovieList</h3>
            <ul>
              <li>
                User {user.name} likes this list, he is {user.age} years old
              </li>
            </ul>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
