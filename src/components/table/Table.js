import React from 'react';
import ReactDOM from 'react-dom'; 
import './Table.css';

function Table(props) {

    return(
        <table className="table">
            <thead className="table__head">
                <tr>
                    <th className="table__header-cell">ID</th>
                    <th className="table__header-cell">First Name</th>
                    <th className="table__header-cell">Last Name</th>
                    <th className="table__header-cell">E-mail</th>
                    <th className="table__header-cell">Phone</th>
                </tr>
            </thead>
            <tbody className="table__body">
                
            </tbody>
        </table>
    )
}

export default Table;