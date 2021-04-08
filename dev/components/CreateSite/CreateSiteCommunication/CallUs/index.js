import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
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
        let block = document.querySelector('.ask__mobil-create');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    };
    render() {
        const { propsDeleteFunctionProps, propsDeleteStateProps } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-item conteiner-item__mobil conteiner-item__mobil-create">
                    <div className="ask">
                        <div className="ask__inner ask__inner__site ask__inner__mobil ask__mobil-create">
                            <div className="ask__inner-item">
                                <h1 className="ask__titel">
                                    Осталось 3 шага
                                </h1>
                                <button
                                    className="button__esc"
                                    onClick={propsDeleteFunctionProps}
                                >
                                    X
                                </button>
                                {
                                    !propsDeleteStateProps ? document.querySelectorAll('.conteiner-item').remove() : null
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