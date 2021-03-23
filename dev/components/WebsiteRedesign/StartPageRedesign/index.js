import React, { Component } from 'react';
import CallUs from "./CallUs";

class StartPageImprovement extends Component {
    render() {
        const {propsFunctionRedesign, stateFunctionRedesign} = this.props;
        return(
          <div className='description'>
              <div className='description__info'>
                  <h1 className='description__info__title'>
                      Редизайн сайта
                  </h1>
                  <div className='description__info__text'>
                      <p className='description__info__text__inner'>
                          Дизайн сайта – первое, на что обращают внимание его посетители.
                          Он внушает доверие к компании, усиливает бренд, увеличивает продажи.
                          Но что если дизайн сайта не выполняет эти задачи?
                          Тут одно из двух: либо он устарел, либо сделан непрофессионально.
                          И в любом случае понадобится редизайн сайта
                      </p>
                  </div>
              </div>
              <div className='description__buttons'>
                  <button
                      className='block__call__information__link block__call__link__inner'
                      onClick={ propsFunctionRedesign }
                  >
                      Обсудить проект
                  </button>
                  {
                      stateFunctionRedesign ? <CallUs
                          propsDeleteRedesign={ propsFunctionRedesign }
                          propsDeleteStateRedesign={ stateFunctionRedesign }
                      /> : null
                  }
              </div>
          </div>
        );
    }
}
export default StartPageImprovement;