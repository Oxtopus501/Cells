import React from 'react';
import './Header.css';
import Button from '../button/Button';

function Header(props) {
    return(
        <header className="header limited-section">
            <h1 className="header__title">Cells</h1>
            <div className="header__buttons-container">
                <Button title={'Загрузить данные'} onClick={props.onLoadInfo}/>
                <Button title={'Загрузить много данных'} />
            </div>    
        </header>    
    )
}

export default Header;