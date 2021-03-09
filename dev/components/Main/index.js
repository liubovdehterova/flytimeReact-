import React, { Component } from 'react';

import Info from './Info';
import Title from './Title';
import Button from './Button';

class Main extends Component {
    render() {
        return (
            <div className="option">
                <h3 className="option__titel">Titel</h3>
                <div className="option__inner">
                    <div className="option__inner__information">
                        <Title 
                            title="Интернет Магазин"
                        />
                        <Info 
                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                    Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Web Решения"
                        />
                        <Info 
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                  Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Mobile"
                        />
                        <Info 
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                  Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="SEO"
                        />
                        <Info 
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                  Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="SMM"
                        />
                        <Info 
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                  Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="PPC"
                        />
                        <Info 
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aperiam recusandae, ipsam odio ut veniam non magnam placeat. 
                                  Sint quas velit, culpa quo, doloribus ipsum dolore iure accusantium modi voluptates vel?"
                        />
                        <Button
                            button="Подробнее"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;