import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}  />
      {/* <Route exact path="/about" component={About}  />
      <Route exact path="/discover" component={Discover}  />
      <Route exact path="/search" component={Search}  /> */}
    </Router>
  );
}

export default App;