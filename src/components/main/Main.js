import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import Button from '../button/Button';
import Table from '../table/Table';
import '../../blocks/loader/loader.css';

function Main(props) {
    return(
        <>
            <section className="data-instruments limited-section">
                <form className="data-instruments__form">
                    <input type="text" name="search" className="data-instruments__input" />
                    <Button type="submit" сlassName="data-instruments__button" title={"Найти"} />
                </form>
                <Button title={'+ Добавить'} />
            </section>
            <Table tableData={props.tableData}/>
        </>
    )
}

export default Main;