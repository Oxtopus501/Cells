import React from 'react';
import './DetailedInfo.css';

function DetailedInfo(props) {
    return(
        <div className="detailed-info limited-section">
            <p className="detailed-info__name">Выбран пользователь <b>{props.person.firstName + ' ' + props.person.lastName}</b></p>
            <p>Описание:</p>
            <textarea value={props.person.description} className="detailed-info__description"/>
            <p>Адрес проживания: <b>{props.person.address.streetAddress}</b></p>
            <p>Город: <b>{props.person.address.city}</b></p>
            <p>Провинция/штат: <b>{props.person.address.state}</b></p>
            <p>Индекс: <b>{props.person.address.zip}</b></p>
        </div>    
    )
}

export default DetailedInfo;