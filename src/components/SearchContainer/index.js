import React, { Component }  from "react";
import "./style.css";
// import API from "../../utils/API";
import Table from 'react-bootstrap/Table';
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
        // console.log("Query: " + query);
        const searched = query.toLowerCase();
        console.log(searched);

        // search for employee based on user input
        let match;
        for(var i=0; i<employees.length; i++) {
            if( searched === employees[i].name.first.toLowerCase() ){
                match = i;
                // Set state w/ employee match
                // console.log(employees[match]);
                this.setState({ 
                    results: [employees[match]]
                })  
            }
        }

        // check if no search found
        // if(this.state.results.length === employees.length ) {    
        //     alert("No employees found - try again!");
        // }

    }

    firstNameFilterAZ = event => {

        // // JS sort()
        // console.log(employees[0].name.first);
        // console.log(employees[7].name.first);
        // console.log("===============");

        function sortByName(currentSpot, nextSpot) {
            if (currentSpot.name.first > nextSpot.name.first) {
                return 1;
            }
            return -1;
        }

        this.setState({ 
            results: employees.sort(sortByName)
        }) 
        
    }

    firstNameFilterZA = event => {
        function sortByName(currentSpot, nextSpot) {
            if (currentSpot.name.first < nextSpot.name.first) {
                return 1;
            }
            return -1;
        }

        this.setState({ 
            results: employees.sort(sortByName)
        }) 
        
    }

    lastNameFilterAZ = event => {
        function sortByName(currentSpot, nextSpot) {
            if (currentSpot.name.last > nextSpot.name.last) {
                return 1;
            }
            return -1;
        }

        this.setState({ 
            results: employees.sort(sortByName)
        }) 
    }

    lastNameFilterZA = event => {
        function sortByName(currentSpot, nextSpot) {
            if (currentSpot.name.last < nextSpot.name.last) {
                return 1;
            }
            return -1;
        }

        this.setState({ 
            results: employees.sort(sortByName)
        }) 
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
                <div className="container">
                    <div className="row">
                        <form className="col-md-4 col-sm-8 col-12 input-group mb-4">
                            <input className="form-control"
                                value={this.state.search}
                                name="search"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Search Employees"
                            />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-dark searchBtn input-group-text" onClick={this.handleFormSubmit}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <h3 className="col-md-6 col-6 contentHeader">Results: {this.state.search} </h3>
                        <div className="col-md-4 col-2" > </div>
                        <span className="col-md-2 col-4"> 
                            <button type="button" className="showAllBtn btn btn-dark" onClick={this.getEmployees}> Show All Employees </button>
                        </span>
                        
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Table striped bordered hover className="employeeTable col-12">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Portrait</th>
                                <th>First Name 
                                    <span>
                                        <button className="btn btn-light firstNameFilter" onClick={this.firstNameFilterAZ}> <i className="fa fa-sort-up"></i> </button> 
                                        <button className="btn btn-light firstNameFilter" onClick={this.firstNameFilterZA}> <i className="fa fa-sort-down"></i> </button>
                                    </span>
                                </th>
                                <th>Last Name
                                    <button className="btn btn-light firstNameFilter" onClick={this.lastNameFilterAZ}> <i className="fa fa-sort-up"></i> </button> 
                                    <button className="btn btn-light firstNameFilter" onClick={this.lastNameFilterZA}> <i className="fa fa-sort-down"></i> </button>
                                </th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.results.map((res, index) => {
                                    let employeePostion = index + 1;
                                    return(
                                        <tr key={employeePostion}>
                                            <td> {employeePostion} </td>
                                            <td> <img src={res.picture.large} alt="portait of employee" /> </td>
                                            <td>{res.name.first}</td>
                                            <td>{res.name.last}</td>
                                            <td>{res.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchContainer;