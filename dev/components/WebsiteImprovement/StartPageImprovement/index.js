import React, { Component } from 'react';
import CallUs from "./CallUs";

class StartPageImprovement extends Component {
    render() {
        const {propsFunctionImp, stateFunctionImp} = this.props;
        return(
          <div className='description'>
              <div className='description__info'>
                  <h1 className='description__info__title'>
                      Доработка сайта
                  </h1>
                  <div className='description__info__text'>
                      <p className='description__info__text__inner'>
                          Ваш сайт плохо продает? Медленно загружаются страницы?
                          Хотите изменить дизайн или добавить новый функционал?
                          В таком случае вам требуется грамотная доработка сайта.
                      </p>
                      <p className='description__info__text__inner'>
                          Наша IT-компания Fly Time готова помочь реализовать любые задумки.
                          Модернизация сайта может выполняться как по вашему ТЗ,
                          так и на основании результатов технического аудита, который покажет, что нужно исправлять.
                      </p>
                  </div>
              </div>
              <div className='description__buttons'>
                  <button
                      className='block__call__information__link block__call__link__inner'
                      onClick={ propsFunctionImp }
                  >
                      Обсудить проект
                  </button>
                  {
                      stateFunctionImp ? <CallUs
                          propsDelete={ propsFunctionImp }
                          propsDeleteState={ stateFunctionImp }
                      /> : null
                  }
              </div>
          </div>
        );
    }
}
export default StartPageImprovement;