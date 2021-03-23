import React, { Component } from 'react'

import WorkImprovementList from './WorkImprovementList'

class WorkImprovement extends Component {
    render() {
        return(
            <div className="work__information">
                <h1 className="work__information__title">
                    Какие работы включает в себя модернизация сайта?
                </h1>
                <p className="work__information__subtitle">
                    В зависимости от требований заказчика доработка сайта может включать в себя следующие пункты:
                </p>
                <WorkImprovementList />
                <p className="work__information__subtitle">
                    Стоимость доработки сайта определяется в индивидуальном порядке.
                    Ведь она рассчитывается на основании перечня предстоящих работ.
                    Но вы должны понимать, что доработка сайта недорого стоить не может.
                    Дорабатывать интернет-проект, устраняя допущенные другими ошибки,
                    всегда труднее, чем создавать с нуля. И на это уходит немало времени.

                    Поэтому, если хотите, чтобы все было сделано на совесть – техническая доработка сайта должна выполняться профессионалами.
                    В противном случае не стоит ее делать вообще, иначе добьетесь ровно противоположного результата.
                </p>
            </div>
        )
    }
}
export default WorkImprovement;