import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function MovieRow() {
  const userContext = useContext(UserContext);
  return (
    <div>
      Movie row
      <h2>
        {userContext.user.name} is {userContext.user.age} years old
      </h2>
      <button onClick={() => userContext.onLogin(userContext.user.name)}>Log in</button>
    </div>
  );
}
