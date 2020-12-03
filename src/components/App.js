import logo from '../logo.svg';
import './App.css';
import Button from './button/Button';
import Header from './header/Header';

function App() {


  return (
    <div className="root">
      <Header />
      <section className="data-instruments limited-section">
        <Button title={'+ Добавить'} />
      </section>
    </div>
  );
}

export default App;
