import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form className="ask__form">
                <label 
                    htmlFor="user__info__phone" 
                    className="user__discprintion"
                >
                    Номер телефона *
                </label>
                <input 
                    type="text" 
                    className="ask__user__info" 
                    id="user__info__phone"
                    placeholder="Номер телефона"
                />
                <label 
                    htmlFor="user__info__email" 
                    className="user__discprintion"
                >
                    Дополнительные данные для связи
                </label>
                <input 
                    type="text" 
                    className="ask__user__info" 
                    id="user__info__email" 
                    placeholder="Email или Skype"
                />
                <label 
                    htmlFor="user__info__option" 
                    className="user__discprintion"
                >
                    Интерисующие услуги
                </label>
                <textarea id="user__info__option" className="text__messeng" rows="5"></textarea>
                <input 
                    className="sumbit" 
                    type="submit" 
                    value="Отправить" 
                />
            </form>
        );
    }
}

export default Form;