import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <header className="header jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Welcome to... !</p>
            </div>
        </header>
    );
}

export default Header;