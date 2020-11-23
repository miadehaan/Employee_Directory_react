import React, { Component }  from "react";
import "./style.css";
// import API from "../../utils/API";
import employees from "../../utils/employees.json";
import EmployeeCard from "../EmployeeCard";

class SearchContainer extends Component {
    state = {
        results: {},
        search: ""
    };

    // When the component mounts, get a list of all available employees and update this.state.employees
    componentDidMount = () => {
        this.searchEmployees("Soham");
    }

    // API call to get all employees
    searchEmployees = query => {
        // API.getUsers(query)
        // .then(res => this.setState({ results: res.results }))
        // .catch(err => console.log(err));
        // console.log(employees.results[0]);

        // All employees
        employees.map(result => (
            this.setState({ 
                results: employees 
            })
        ));
    }

    handleInputChange = event => {
        // Getting the searched input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`You searched for: ${this.state.search} `);
        this.setState({
            search: ""
        });

        // Search API with user input
        this.searchEmployees(this.state.search);

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

                <EmployeeCard results={this.state.results} />
            </div>
        );
    }
}

export default SearchContainer;