import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
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
        let block = document.querySelector('.ask__inner__position__adept');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    };
    render() {
        const { propsAdepCall, stateAdepCall } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-item">
                    <div className="ask">
                        <div className="ask__inner ask__inner__position__adept">
                            <div className="ask__inner-item">
                                <h1 className="ask__titel">
                                    Узнать стоимость
                                </h1>
                                <button
                                    className="button__esc"
                                    onClick={propsAdepCall}
                                >
                                    X
                                </button>
                                {
                                    !stateAdepCall ? document.querySelectorAll('.conteiner-item').remove() : null
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

export default CallUs;