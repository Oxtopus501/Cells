import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import TableEntry from './table-entry/TableEntry';


function App() {

  const [tableData, setTableData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  function getInfo() {
    return fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then((res) => {
        if (res.ok) return res.json();
            return Promise.reject(new Error(res.status));
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }

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
      <Main tableData={tableData} isLoading={isLoading}/>
      <div className="loader"></div>
    </div>
  );
}

export default App;
