import React, { Component } from 'react';

class InterestingForm extends Component {
    render() {
        return (
            <form action="#"
                  className="ask__form__item"
            >
                <select name="option" id="user__info__option"
                        className="ask__user__info__item ask__user__info__select"
                >
                    <option className="ask__user__info__option__inner">
                        Другое
                    </option>
                    <option value="Разработка"
                            className="ask__user__info__option__inner">
                        Разработка сайта
                    </option>
                    <option value="Продвижение"
                            className="ask__user__info__option__inner">
                        Продвижение сайта
                    </option>
                    <option value="мобильное приложение"
                            className="ask__user__info__option__inner">
                        Разработка мобильного приложения
                    </option>
                </select>
                <div className="ask__form__block">
                    <input type="text"
                           className="ask__user__info__item"
                           id="user__info__phone"
                           placeholder="Номер телефона"
                    />
                    <input type="text"
                           className="ask__user__info__item"
                           id="user__info__name"
                           placeholder="Ваше имя"
                    />
                    <input type="text"
                           className="ask__user__info__item"
                           id="user__info__email"
                           placeholder="Email или Skype"
                    />
                    <label htmlFor="callback-file"
                           className="ask__user__info__item ask__user__info__result"
                           data-text="{&quot;default&quot;: &quot;+ Прикрепить файл (doc, pdf, jpg) &quot;, &quot;changed&quot;: &quot;Выбранный файл: %s (%s kb)&quot;}"
                    >
                        + Прикрепить файл (doc, pdf, jpg)
                    </label>
                    <input type="file"
                           data-name="file"
                           id="callback-file"
                           name="callback-file"
                           className="ask__user__info__item ask__user__info__file"
                           accept=".docx,.doc,.pdf,.jpg"
                           data-rule-filetype="docx|doc|pdf|jpg"
                           data-msg-filetype="Допустимые расширения файлов: doc, pdf, jpg"
                    />
                </div>
                <textarea name="callback-text"
                          className="ask__user__info__text"
                          placeholder="Напишите все, что считаете нужным"
                ></textarea>
                <div className="ask__form__button">
                    <input className="sumbit" type="submit" value="Отправить" />
                </div>
            </form>
        );
    }
}

export default InterestingForm;