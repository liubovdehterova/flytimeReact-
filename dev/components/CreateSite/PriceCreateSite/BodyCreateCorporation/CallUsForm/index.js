import React, {Component } from 'react';

import Form from './Form';

class CallUsForm extends Component {
    constructor(props) {
        super(props);

        this.parentRef = React.createRef();
        this.elementRef = React.createRef();
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
        let block = document.querySelector('.ask__inner__site__price-corp');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    };
    render() {
        const { propsOpenFormFunctionCorporation, stateOpenFormFunctionCorporation } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-item conteiner-item__price">
                    <div className="ask">
                        <div className="ask__inner ask__inner__site ask__inner__site__price-corp">
                            <div className="ask__inner-item">
                                <h1 className="ask__titel">
                                    Корпоративные сайты
                                </h1>
                                <button
                                    className="button__esc"
                                    onClick={ propsOpenFormFunctionCorporation }
                                >
                                    X
                                </button>
                                {
                                    !stateOpenFormFunctionCorporation ? document.querySelectorAll('.conteiner-item').remove() : null
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