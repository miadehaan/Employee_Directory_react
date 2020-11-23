import React from "react";
import "./style.css";

function EmployeeCard(props) {
    console.log(props.results);

    return (
        <div>
            <ul className="list-group">
                {props.results.map(result => (
                    <li className="list-group-item" key={result.id}>
                        <strong>Name:</strong> {result.name.first}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default EmployeeCard;