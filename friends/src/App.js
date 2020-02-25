import React from 'react';
import { Route, Pro } from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';

function App() {
  return (
  <div className="App">

    <Route path="/login">
      <Login/>
    </Route>

<Route path="/addFriend">
  <AddFriend />
</Route>



    </div>
  );
}

export default App;
