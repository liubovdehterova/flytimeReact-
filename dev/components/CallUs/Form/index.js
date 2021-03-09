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
                    Выберите услугу:
                </label>
                <select 
                    name="option" 
                    id="user__info__option" 
                    className="ask__user__info"
                >
                    <option 
                        value="Другое" 
                        className="ask__user__info__option__inner"
                    >
                        Другое
                    </option>
                    <option 
                        value="Разработка" 
                        className="ask__user__info__option__inner"
                    >
                        Разработка сайта
                    </option>
                    <option 
                        value="Продвижение" 
                        className="ask__user__info__option__inner"
                    >
                        Продвижение сайта
                    </option>
                    <option 
                        value="мобильное приложение" 
                        className="ask__user__info__option__inner"
                    >
                        Разработка мобильного приложения
                    </option>
                </select>
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