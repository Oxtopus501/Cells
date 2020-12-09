import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import logo from '../logo.svg';
import './App.css';
import '../blocks/pagination/pagination.css';
import '../blocks/loader/loader.css';
import Header from './header/Header';
import Table from './table/Table';
import TableEntry from './table-entry/TableEntry';
import DetailedInfo from './detailedInfo/DetailedInfo';
import SearchForm from './search-form/SearchForm';
import Button from './button/Button';
import _, { orderBy } from 'lodash';


function App() {
  
  const [tableData, setTableData] = React.useState([]); //Данные для таблицы
  const [isLoading, setIsLoading] = React.useState(false); //Стэйт "идёт ли загрузка?"
  const [sortDirection, setSortDirection] = React.useState('asc'); //Стэйт с направлением сортировки
  const [orderedBy, setOrderedBy] = React.useState(null); //Категория сортировки
  const [detailedInfo, setDetailedInfo] = React.useState(null);
  const ENTRIES_PER_PAGE = 50; //Выводим по 50 записей на странице
  const [pageCount, setPageCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [dataToRender, setDataToRender] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState('');
  
  let dataCopy = [];

  function handlePageClick({selected}) {
      setCurrentPage([selected]);
  }

  //Загрузка данных с сервера
  function getInfo(dataLink) {
    setIsLoading(true);
    return fetch(dataLink)
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
    dataCopy = tableData.slice();
    if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else {
      setSortDirection('asc')
    }
    const sortedData = _.orderBy(dataCopy, event.target.id, sortDirection);
    setOrderedBy(event.target.id);
    setTableData(sortedData);
  }

  function showInfo(item) {
    //console.log(event.target.parentElement);
    setDetailedInfo(item);
  }

  function changeFilterValue(event) {
    setFilterValue(event.target.value);
  }

  function filterData() {
    dataCopy = tableData.slice(); //Делаю копию tableData
    setCurrentPage(0); //Задаю первую страницу пагинации текущей
    const filteredData = dataCopy.filter( item => {
      return item['firstName'].toLowerCase().includes(filterValue.toLowerCase())
        || item['lastName'].toLowerCase().includes(filterValue.toLowerCase())
        || item['email'].toLowerCase().includes(filterValue.toLowerCase())
    }) //Фильтрую записи
    let dataToDisplay = [];
    //Если строчек больше, чем должно быть на странице - разбиваем на страницы, иначе - передаём все строчки на первую страницу
    if (filteredData.length > ENTRIES_PER_PAGE) {
      dataToDisplay = _.chunk(filteredData, ENTRIES_PER_PAGE);
      
    } else {
      dataToDisplay[0] = filteredData;
    }
    setPageCount(dataToDisplay.length / ENTRIES_PER_PAGE);
    setDataToRender(dataToDisplay);
  }

  //Перерисовка изменении данных(при получении от сервера, а позже и при добавлении новой строки)  
  React.useEffect(() => {
    dataCopy = tableData.slice();
    setPageCount(tableData.length / ENTRIES_PER_PAGE);
    const chunkedData = _.chunk(dataCopy, ENTRIES_PER_PAGE);
    setDataToRender(chunkedData);
    //console.log(tableData);
    //console.log(chunkedData);
  }, [tableData]);

  //Перерисока таблицы при изменении данных, которые нужно отобразить, или текущей страницы
  React.useEffect(() => {
    if (dataToRender.length > 0) {
      setPageCount(dataToRender.length);
      ReactDOM.render((
        <>
          {
          dataToRender[currentPage].map(item => (
            <TableEntry entry={item} showInfo={showInfo}/>
          ))}
        </>
      ), document.querySelector('.table__body'))}
  }, [dataToRender, currentPage]);

  return (
    <div className="root">
      <Header 
        onLoadInfo={getInfo} 
      />
      {/*<Main 
        tableData={tableData} 
        sortData={sortData} 
        orderedBy={orderedBy} 
        sortDirection={sortDirection} 
      />*/}
      <section className="data-instruments limited-section">
        <SearchForm changeFilterValue={changeFilterValue} filterData={filterData}/>
        <button className="data-instruments__button">+ Добавить</button>
      </section>
        <Table 
          tableData={tableData} 
          sortData={sortData} 
          orderedBy={orderedBy} 
          sortDirection={sortDirection}
        />
        {(tableData.length > 0) ? <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName={'pagination__item'}
          previousClassName={'pagination__item'}
          nextClassName={'pagination__item'}
        /> : null}
      {isLoading ? <div className="loader" /> : null}
      {detailedInfo ? <DetailedInfo person={detailedInfo} /> : null }
    </div>
  );
}

export default App;
