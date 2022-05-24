import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Login = () => {
  return <h2> Login </h2>;
};

const FriendsList = () => {
  return <h2> FriendsList </h2>;
};

const AddFriend = () => {
  return <h2> AddFriend </h2>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;
