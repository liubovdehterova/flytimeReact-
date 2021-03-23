import React, { Component } from 'react';

class WhatImprovement extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Что такое доработка сайта?
                </h1>
                <p className="ask__improvement__description">
                    Доработка существующего сайта – это комплекс мер,
                    направленных на улучшение работы ресурса.
                    С их помощью можно устранить ошибки,
                    допущенные ранее при создании интернет-проекта.
                    Либо же добавить новый функционал,
                    изменить дизайн и другие элементы сайта,
                    чтобы он стал более удобным для пользователей.
                </p>
            </div>
        )
    }
}
export default WhatImprovement;