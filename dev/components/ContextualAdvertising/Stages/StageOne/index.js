import React, { Component } from 'react'

class StageOne extends Component {
    render() {
        const { subtitle, title, text, textListOne, textListTwo, textListThree, textListFour, newClass } = this.props;
        let className = "stage";
        return(
            <div className={className + ' ' + newClass}>
                <h4 className="stage__info__subtitle">
                    { subtitle }
                </h4>
                <div className="stage__inner">
                    <div className="stage__info">
                        <h1 className="stage__info__title">
                            { title }
                        </h1>
                        <p className="stage__info__text">
                            { text }
                        </p>
                    </div>
                    <ul className="stage__list stage__info">
                        <li className="stage__list__inner">
                            { textListOne }
                        </li>
                        <li className="stage__list__inner">
                            { textListTwo }
                        </li>
                        <li className="stage__list__inner">
                            { textListThree }
                        </li>
                        <li className="stage__list__inner">
                            { textListFour }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default StageOne;