import React, { Component } from 'react';

import WorkRedesignList from './WorkRedesignList'
import CallUs from "./CallUs";

class WorkRedesign extends Component {
    render() {
        const { propsFunctionWorkRedesign, stateFunctionWorkRedesign} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    Как понять, что пора сделать редизайн сайта?
                </h1>
                <p className="ask__improvement__description">
                    Существует ряд причин, по которым легко определить, что пора сделать редизайн сайта:
                </p>

                <WorkRedesignList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsFunctionWorkRedesign }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateFunctionWorkRedesign ? <CallUs
                            propsDeleteFunctionWorkRedesign={ propsFunctionWorkRedesign }
                            propsDeleteStateWorkRedesign={ stateFunctionWorkRedesign }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default WorkRedesign;