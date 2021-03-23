import React, { Component } from 'react';
import CallUs from "./CallUs";

class StartPageWeb extends Component {
    render() {
        const {propsFunction, stateState} = this.props;
        return(
          <div className='description'>
              <div className='description__info'>
                  <h1 className='description__info__title'>
                      Разработка дизайна сайта
                  </h1>
                  <div className='description__info__text'>
                      <p className='description__info__text__inner'>
                          Разработка дизайна сайта – важный шаг при создании сайта,
                          который помогает привлечь максимальное число потенциальных клиентов.
                          Доказано, что посетители каждого веб-проекта оценивают дизайн страницы в течение 5-6 секунд.
                          Чтобы за этот промежуток времени целевого посетителя превратить в заинтересованного клиента,
                          нужно поработать над дизайном сайта. Дизайн – это лицо сайта, его презентация.
                      </p>
                      <p className='description__info__text__inner'>
                          Заказывая дизайн сайта у компании Fly Time – вы получаете UX дизайн,
                          с грамотно построенной архитектурой и корректно подобранной цветовой гаммой,
                          с учетом вашей целевой аудитории. Профессиональный дизайн сайта – это ключ к сердцу большинства его посетителей!
                      </p>
                      <p className='description__info__text__inner'>
                        Профессиональный дизайн сайта – это ключ к сердцу большинства его посетителей!
                      </p>
                  </div>
              </div>
              <div className='description__buttons'>
                  <button
                      className='block__call__information__link block__call__link__inner'
                      onClick={ propsFunction }
                  >
                      Обсудить проект
                  </button>
                  {
                      stateState ? <CallUs
                          propsDelete={ propsFunction }
                          propsDeleteState={ stateState }
                      /> : null
                  }
              </div>
          </div>
        );
    }
}
export default StartPageWeb;