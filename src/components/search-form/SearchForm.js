import React from 'react';
import '../../blocks/data-instruments/data-instruments.css';

function SearchForm(props) {

    function handleButtonClick(event) {
        event.preventDefault();
        props.filterData();
    }

    return(
    <form className="data-instruments__form">
        <input type="text" name="search" className="data-instruments__input" onChange={props.changeFilterValue}/>
        <button type="submit" className="data-instruments__button" onClick={handleButtonClick}>Найти</button>
    </form>
    )    
}

export default SearchForm;