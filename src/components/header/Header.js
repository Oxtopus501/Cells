import './Header.css';
import Button from '../button/Button';

function Header() {
    return(
        <header className="header limited-section">
            <h1 className="header__title">Cells</h1>
            <div className="header__buttons-container">
                <Button title={'Загрузить данные'} />
                <Button title={'Загрузить много данных'} />
            </div>    
        </header>    
    )
}

export default Header;