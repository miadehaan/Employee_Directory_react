import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // npm install react-router-dom
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchContainer from "./components/SearchContainer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <SearchContainer />
        <EmployeeCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;