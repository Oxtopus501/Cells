import React from 'react';
import './Header.css';
import Button from '../button/Button';

function Header(props) {

    const smallDataLink = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigDataLink = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    return(
        <header className="header limited-section">
            <h1 className="header__title">Cells</h1>
            <div className="header__buttons-container">
                <Button title={'Загрузить данные'} onClick={props.onLoadInfo} arguments={smallDataLink}/>
                <Button title={'Загрузить много данных'} onClick={props.onLoadInfo} arguments={bigDataLink}/>
            </div>    
        </header>    
    )
}

export default Header;