import React, { Component } from 'react';

import InterestingForm from "./InterestingForm";

class UsInteresting extends Component {
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
        let block = document.querySelector('.ask__inner__item');
        let coords = this.getCoords();
        block.style.top = coords.top + "px";
    };
    render() {
        const { clearUsInterestingPropsForm, clearUsInterestingPropsState } = this.props;
        return (
            <>
                <div className="fixed"> </div>
                <div className="conteiner-other conteiner-other__main" ref={this.parentRef}>
                    <div className="ask" >
                        <div className="ask__inner__item" ref={this.elementRef}>
                            <div className="ask__inner__flex">
                                <h1 className="ask__titel">
                                    Что вас интерисует?
                                </h1>
                                <button
                                    className="button__esc"
                                    onClick={clearUsInterestingPropsForm}
                                >
                                    X
                                </button>
                                {
                                    console.log('render Other', clearUsInterestingPropsState)
                                }
                                {
                                    !clearUsInterestingPropsState ?
                                        document.querySelector('.conteiner-other').remove()
                                    : null
                                }
                            </div>

                            <InterestingForm />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UsInteresting;