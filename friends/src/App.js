import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
  <div className="App">

    <Route path="/login">
      <Login/>
    </Route>

    </div>
  );
}

export default App;
