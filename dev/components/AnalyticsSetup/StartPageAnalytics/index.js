import React, { Component } from 'react';
import CallUs from "./CallUs";

class StartPageAnalytics extends Component {
    render() {
        const { propsFunctionAnalytics, stateFunctionAnalytics } = this.props;
        return(
          <div className='description'>
              <div className='description__info'>
                  <h1 className='description__info__title'>
                      Подключение аналитики лучшее решение
                  </h1>
                  <div className='description__info__text'>
                      <p className='description__info__text__inner'>
                          Мы поможем качественно настроить сервисы аналитики,
                          благодаря которым вы сможете измерять эффективность продвижения сайта по разным каналам и оптимизировать их.
                      </p>
                      <p className='description__info__text__inner'>
                          У нас есть решения для каждого: от нового одностраничного сайта до большого интернет магазина или информационного портала.
                          Индивидуальный подход к каждому клиенту позволят точно определить цели и KPI для получения лучшего результата.
                      </p>
                  </div>
              </div>
              <div className='description__buttons'>
                  <button
                      className='block__call__information__link block__call__link__inner'
                      onClick={ propsFunctionAnalytics }
                  >
                      Обсудить проект
                  </button>
                  {
                      stateFunctionAnalytics ? <CallUs
                          propsDeleteRedesign={ propsFunctionAnalytics }
                          propsDeleteStateRedesign={ stateFunctionAnalytics }
                      /> : null
                  }
              </div>
          </div>
        );
    }
}
export default StartPageAnalytics;