import React, {Component } from 'react';

import Form from './Form';

class CallUsForm extends Component {
    constructor(props) {
        super(props);
        this.getCoords = this.getCoords.bind(this);
    }
    getCoords() {
        let box = document.querySelector('.fixed').getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    componentDidMount() {
        let block = document.querySelector('.ask__inner__site__bc');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    }
    render() {
        const { propsOpenFormFunctionBusinessCard, stateOpenFormFunctionBusinessCard } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-item conteiner-item__context">
                    <div className="ask">
                        <div className="ask__inner ask__inner__site ask__inner__site__bc">
                            <div className="ask__inner-item">
                                <h1 className="ask__titel">
                                    По открытому бюджету
                                </h1>
                                <button
                                    className="button__esc"
                                    onClick={ propsOpenFormFunctionBusinessCard }
                                >
                                    X
                                </button>
                                {
                                    !stateOpenFormFunctionBusinessCard ? document.querySelectorAll('.conteiner-item').remove() : null
                                }
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CallUsForm;