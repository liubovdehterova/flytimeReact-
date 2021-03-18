import React, { Component } from 'react';

import InterestingForm from "./InterestingForm";

class UsInteresting extends Component {
    render() {
        const { clearUsInterestingPropsForm, clearUsInterestingPropsState } = this.props;
        console.log('render', clearUsInterestingPropsState)
        return (
            <div className="conteiner-other">
                <div className="ask">
                    <div className="ask__inner__item">
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
        );
    }
}

export default UsInteresting;