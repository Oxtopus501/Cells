import React from 'react';
import './PopupFormAdd.css';
import close from '../../images/close.svg';

function PopupFormAdd(props) {

    let popupClassName = 'popup';
    if (props.isOpen) {
        popupClassName += ' popup_is-opened';
    }

    function handleAddButtonClick(event) {
        event.preventDefault();
        const newData = {
            id: event.target.parentElement.elements.id.value,
            firstName: event.target.parentElement.elements.firstName.value,
            lastName: event.target.parentElement.elements.lastName.value,
            email: event.target.parentElement.elements.email.value,
            phone: event.target.parentElement.elements.phone.value
        }
        /*const id = event.target.parentElement.elements.id.value;
        const firstName = event.target.parentElement.elements.firstName.value;
        const lastName = event.target.parentElement.elements.lastName.value;
        const email = event.target.parentElement.elements.email.value;
        const phone = event.target.parentElement.elements.phone.value;*/
        if (newData.id !== '' && 
            newData.firstName !== '' && 
            newData.lastName !== '' && 
            newData.email !== '' && 
            newData.phone !== '') {
            props.onAddData(newData);
        }
    }

    return(
        <div className={popupClassName}>
            <div className="popup__content">
                <img src={close} alt="" className="popup__close" onClick={props.onClose}/>
                <h3 className="popup__title">Добавить строку</h3>
                <form className="popup__form">
                    <div className="popup__form-container">
                        <label className="popup__label">ID</label>
                        <label className="popup__label">Имя</label>
                        <label className="popup__label">Фамилия</label>
                        <label className="popup__label">E-mail</label>
                        <label className="popup__label">Телефон</label>
                        <input required className="popup__input" type="number" name="id" />
                        <input required className="popup__input" type="text" name="firstName" />
                        <input required className="popup__input" type="text" name="lastName" />
                        <input required className="popup__input" type="text" name="email" />
                        <input required className="popup__input" type="text" name="phone" />
                    </div>
                    <button className="button popup__button popup__button_active" id='add' onClick={handleAddButtonClick}>Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupFormAdd;