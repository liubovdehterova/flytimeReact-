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
        let block = document.querySelector('.ask__inner-messing');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    };
    render() {
        const { propsDeleteFunction, propsDeleteState } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-item conteiner-item-messing">
                    <div className="ask">
                        <div className="ask__inner ask__inner__site ask__inner-other ask__inner-messing">
                            <div className="ask__inner-item">
                                <h1 className="ask__titel">Оставьте Сообщение</h1>
                                <button
                                    className="button__esc"
                                    onClick={propsDeleteFunction}
                                >
                                    X
                                </button>
                                {
                                    !propsDeleteState ? document.querySelectorAll('.conteiner-item').remove() : null
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