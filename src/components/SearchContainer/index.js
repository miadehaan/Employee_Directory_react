import React, { Component }  from "react";
import "./style.css";
// import API from "../../utils/API";
import Table from 'react-bootstrap/Table'
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
        console.log(employees);

        // search for employee based on user input
        let match;
        for(var i=0; i<employees.length; i++) {
            if( query === employees[i].name.first ){
                match = i;
                // Set state w/ employee match
                // console.log(employees[match]);
                this.setState({ 
                    results: [employees[match]]
                })  
            }

        }

    }

    firstNameFilter = event => {

         // // JS sort()
        // console.log(query[0].name.first);
        // console.log(query[7].name.first);

        // console.log("===============");

        // function sortByName(currentSpot, nextSpot) {
        //     if (currentSpot.name.first > nextSpot.name.first) {
        //         return 1;
        //     }
        //     return -1;
        // }

        // query.sort(sortByName);

        // console.log(query[0].name.first);
        // console.log(query[7].name.first);
        
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

                    {/* <ul>
                        {this.state.results.map(res => (
                            <li className="list-group-item" key={res.name.first} >
                                {res.name.first}
                            </li>
                        ))}
                        
                    </ul> */}

                    <Table striped bordered hover className="employeeTable">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.results.map((res, index) => {
                                let employeePostion = index + 1;
                                return(
                                    <tr key={employeePostion}>
                                        <td> {employeePostion} </td>
                                        <td>{res.name.first}</td>
                                        <td>{res.name.last}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </Table>
                </div>
            </div>
        );
    }
}

export default SearchContainer;