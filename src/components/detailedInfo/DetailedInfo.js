import React from 'react';
import './DetailedInfo.css';

function DetailedInfo(props) {
    return(
        <div className="detailed-info limited-section">
            <p className="detailed-info__name">Выбран пользователь <b>{props.person.firstName + ' ' + props.person.lastName}</b></p>
            <p>Описание:</p>
            <textarea value={props.person.description ? props.person.description : 'Нет данных'} className="detailed-info__description"/>
            <p>Адрес проживания: <b>{props.person.address ? props.person.address.streetAddress : 'Нет данных'}</b></p>
            <p>Город: <b>{props.person.address ? props.person.address.city : 'Нет данных'}</b></p>
            <p>Провинция/штат: <b>{props.person.address ? props.person.address.state : 'Нет данных'}</b></p>
            <p>Индекс: <b>{props.person.address ? props.person.address.zip : 'Нет данных'}</b></p>
        </div>    
    )
}

export default DetailedInfo;