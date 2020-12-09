import React from 'react';
import './Button.css';

function Button(props) {
    function handleClick() {
        props.onClick(props.arguments)
    }

    return(
        <button className="button" onClick={handleClick}>{props.title}</button>
    )
}

export default Button;