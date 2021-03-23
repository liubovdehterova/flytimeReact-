import React, { Component } from 'react'

class FormDesign extends Component {
    render() {
        return(
            <div className="fromDesign">
                <div className="fromDesign__inner">
                    <h1 className="fromDesign__title">
                        Заполните форму и получите консультацию по вашему проекту!
                    </h1>
                    <form action="#" className="fromDesign__form">
                        <div className="fromDesign__form__inner">
                            <div className="fromDesign__form__inner-other">
                                <label
                                    htmlFor="name"
                                    className="fromDesign__form__name"
                                >
                                    Ваше имя*
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="fromDesign__form__input"
                                    placeholder="Введите ваше имя"
                                />
                            </div>
                            <div className="fromDesign__form__inner-other">
                                <label
                                    htmlFor="phone"
                                    className="fromDesign__form__name"
                                >
                                    Ваш номер телефона*
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    className="fromDesign__form__input"
                                    placeholder="Введите ваш номер телефона"
                                />
                            </div>
                        </div>
                        <textarea
                            className="fromDesign__textarea"
                            rows="5"
                            placeholder="Ваше сообщение/ссылка на ваш сайт"
                        />
                        <input type="submit" className="sumbit submit__form" />
                    </form>
                </div>
            </div>
        );
    }
}
export default FormDesign;