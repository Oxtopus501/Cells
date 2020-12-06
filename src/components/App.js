import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import TableEntry from './table-entry/TableEntry';
import _, { orderBy } from 'lodash';


function App() {

  const [tableData, setTableData] = React.useState([]); //Данные для таблицы
  const [isLoading, setIsLoading] = React.useState(false); //Стэйт "идёт ли загрузка?"
  const [sortDirection, setSortDirection] = React.useState('asc'); //Стэйт с направлением сортировки
  const [orderedBy, setOrderedBy] = React.useState(null);

  //Загрузка данных с сервера
  function getInfo() {
    setIsLoading(true);
    return fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then((res) => {
        if (res.ok) return res.json();
            return Promise.reject(new Error(res.status));
      })
      .then((data) => {
        setTableData(data);
        setIsLoading(false);
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }

  //Сортировка данных
  function sortData(event) {
    const dataCopy = tableData.slice();
    if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else {
      setSortDirection('asc')
    }
    const sortedData = _.orderBy(dataCopy, event.target.id, sortDirection);
    setOrderedBy(event.target.id);
    console.log(sortDirection);
    setTableData(sortedData);
  }

  //Перерисока таблицы при изменении tableData
  React.useEffect(() => {
    ReactDOM.render((
      <>
        {tableData.map(item => (
          <TableEntry entry={item} />
        ))}
      </>
    ), document.querySelector('.table__body'))
  });

  return (
    <div className="root">
      <Header 
        onLoadInfo={getInfo} 
      />
      <Main tableData={tableData} sortData={sortData} orderedBy={orderedBy} sortDirection={sortDirection}/>
      {isLoading ? <div className="loader" /> : null}
    </div>
  );
}

export default App;
