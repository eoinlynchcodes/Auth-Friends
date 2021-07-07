import React, { Component, Children } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

function App() {

  function ProtectedRoute({ children, ...rest}){
    const doesTokenExist = localStorage.getItem('token')
    return (
      <Route {...rest}>
        {
          doesTokenExist ? children : <Redirect to="/login"/>
        }
      </Route>
    )
  }

  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>

      <Route>{/* <AddFriend /> */}</Route>

      <ProtectedRoute exact path="/addFriend">
        <AddFriend />
      </ProtectedRoute>

      <ProtectedRoute exact path='/friendsList'>
        <FriendsList/>
      </ProtectedRoute>
    </div>
  );
}

export default App;
