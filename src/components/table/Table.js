import React from 'react';
import ReactDOM from 'react-dom'; 
import './Table.css';

function Table(props) {

    const showDirection = function() {
        if (props.sortDirection === 'asc') {
            return 	'\u25bc';
        } else {
            return '\u25b2';
        }
    }();

    return(
        <table className="table">
            <thead className="table__head">
                <tr>
                    <th className="table__header-cell" onClick={props.sortData} id="id">ID {props.orderedBy === 'id' ? showDirection : null}</th>
                    <th className="table__header-cell" onClick={props.sortData} id="firstName">First Name {props.orderedBy === 'firstName' ? showDirection : null}</th>
                    <th className="table__header-cell" onClick={props.sortData} id="lastName">Last Name {props.orderedBy === 'lastName' ? showDirection : null}</th>
                    <th className="table__header-cell" onClick={props.sortData} id="email">E-mail {props.orderedBy === 'email' ? showDirection : null}</th>
                    <th className="table__header-cell" onClick={props.sortData} id="phone">Phone {props.orderedBy === 'phone' ? showDirection : null}</th>
                </tr>
            </thead>
            <tbody className="table__body">
                
            </tbody>
        </table>
    )
}

export default Table;