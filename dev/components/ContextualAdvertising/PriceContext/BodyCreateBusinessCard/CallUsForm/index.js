import React, {Component } from 'react';

import Form from './Form';

class CallUsForm extends Component {
    render() {
        const { propsOpenFormFunctionBusinessCard, stateOpenFormFunctionBusinessCard } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner ask__inner__site">
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
        );
    }
}

export default CallUsForm;