import React from 'react';
import './Table-entry.css';

function TableEntry(props) {

    function handleTableEntryClick() {
        props.showInfo(props.entry);
    }

    return(
        <tr className="table-entry" key={props.entry.id + props.entry.phone} onClick={handleTableEntryClick}>
            <td>{props.entry.id}</td>
            <td>{props.entry.firstName}</td>
            <td>{props.entry.lastName}</td>
            <td>{props.entry.email}</td>
            <td>{props.entry.phone}</td>
        </tr>
    )
}

export default TableEntry;