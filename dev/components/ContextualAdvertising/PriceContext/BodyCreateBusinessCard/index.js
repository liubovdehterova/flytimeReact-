import React, { Component } from 'react';
import CallUsForm from "./CallUsForm";


class BodyCreateBusinessCard extends Component {

    render() {
        const {id, price, name, idPrice, propsOpenBusinessCard, stateOpenBusinessCard } = this.props;
        return(
            <div className="price__inner"
                 id = { id }
            >
                <p className="price__inner__id price__inner__margin">
                    { id }
                </p>
                <p className="price__inner__count price__inner__margin">
                    <span className="price__inner__count-text">от</span>
                    { price }
                </p>
                <p className="price__inner__name price__inner__margin">
                    { name }
                </p>
                <div className="price__inner__margin price__inner__margin-button">
                    <button className="price__inner__form"
                            onClick={ propsOpenBusinessCard }
                            id={ idPrice }
                    >
                        Заказать
                    </button>
                    {
                        stateOpenBusinessCard ? <CallUsForm
                           propsOpenFormFunctionBusinessCard={ propsOpenBusinessCard }
                           stateOpenFormFunctionBusinessCard={ stateOpenBusinessCard }
                       /> : null
                    }
                </div>

            </div>
        );
    }
}

export default BodyCreateBusinessCard;