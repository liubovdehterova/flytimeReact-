import React, { Component } from 'react'
import CallUs from "./CallUs";


class MobileDesign extends Component {
    render() {
        const {propsFunctionMobile, stateStateMobile} = this.props;
        return(
          <div className="mobile">
              <div className="mobile__info">
                  <h1 className="mobile__info__title">
                      Преимущества мобильной версии сайта
                  </h1>
                  <div className="mobile__info__inner">
                      <h3 className="mobile__info__inner__title">
                          Максимальный охват аудитории
                      </h3>
                      <p className="mobile__info__inner__text">
                          Почему вам необходима мобильная версия? Согласно статистике более половины всех пользователей совершают покупки с мобильных устройств.
                      </p>
                  </div>
                  <div className="mobile__info__inner">
                      <h3 className="mobile__info__inner__title">
                          Легкость и быстрая загрузка страниц
                      </h3>
                      <p className="mobile__info__inner__text">
                          Мобильная версия имеет упрощенный вариант основного сайта - она намного быстрей. Что очень важно при использовании мобильного интернета.
                      </p>
                  </div>
                  <div className="mobile__info__inner">
                      <h3 className="mobile__info__inner__title">
                          Лояльность поисковых систем
                      </h3>
                      <p className="mobile__info__inner__text">
                          Поисковые системы отдают приоритет тем сайтам у которых есть мобильная версия. Такие сайты получают повышенную посещаемость.
                      </p>
                  </div>
              </div>
              <div className='description__buttons'>
                  <button
                      className='block__call__information__link block__call__link__inner'
                      onClick={ propsFunctionMobile }
                  >
                      Узнать стоимость
                  </button>
                  {
                      stateStateMobile ? <CallUs
                          propsDeleteMobile={ propsFunctionMobile }
                          propsDeleteStateMobile={ stateStateMobile }
                      /> : null
                  }
              </div>
          </div>
        );
    }
}
export default MobileDesign;