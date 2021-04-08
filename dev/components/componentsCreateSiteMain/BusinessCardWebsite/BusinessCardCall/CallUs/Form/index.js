import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form className="ask__form">
                <label 
                    htmlFor="user__info__phone" 
                    className="user__discprintion"
                >
                    Ссылка на Ваш сайт*
                </label>
                <input 
                    type="text" 
                    className="ask__user__info" 
                    id="user__info__site"
                    placeholder="Ссылка на Ваш сайт"
                />
                <label
                    htmlFor="user__info__phone"
                    className="user__discprintion"
                >
                    Номер телефона*
                </label>
                <input
                    type="text"
                    className="ask__user__info"
                    id="user__info__phone"
                    placeholder="Ваш номер телефона"
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