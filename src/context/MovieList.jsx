import React, { Component } from 'react';
import UserContext from './UserContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log('MovieList mounted to DOM');
    console.log('priemas prie context ne renderyje', this.context);
    //kad veiktu reikia apacioje pries exporta prideti eilute
    //arba paduodant kaip statini rodikli
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            <h3>MovieList</h3>
            <ul>
              <li>
                User {userContext.user.name} likes this list, he is {userContext.user.age} years old
              </li>
            </ul>
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
// MovieList.contextType = UserContext;
export default MovieList;
