import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // npm install react-router-dom
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SearchContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;