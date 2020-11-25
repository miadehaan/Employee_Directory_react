import React, { Component }  from "react";
import "./style.css";
// import API from "../../utils/API";
import employees from "../../utils/employees";

class SearchContainer extends Component {
    state = {
        results: [],
        search: ""
    };

    // When the component mounts, get a list of all available employees and update this.state.employees
    componentDidMount() {
        this.getEmployees("Tommy");
    }

    // API call to get all employees
    getEmployees = event => {

        this.setState({ 
            results: employees
        })
        console.log(this.state.results);

    }

    searchEmployees = query => {
        console.log("Query: " + query);

        // search for employee based on user input
        // employees.map(res => {
        //     console.log(res);

        //     this.setState({ 
        //         results: [res.name.first]
        //     })
        // });
    }


    handleInputChange = event => {
        // Getting the searched input which triggered the change
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // alert(`You searched for: ${this.state.search} `);

        // Search API/json with user input
        let userInput = this.state.search;
        this.searchEmployees(userInput);

        // Reset the form field
        this.setState({
            search: ""
        });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <input
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search Employees"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>

                <div>
                    <h3 className="contentHeader">Searched: {this.state.search} </h3>

                    <ul>
                        {this.state.results.map(res => (
                            <li className="list-group-item" key={res.name.first} >
                                {res.name.first}
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchContainer;