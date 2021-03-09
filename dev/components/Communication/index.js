import React, {Component} from 'react';

class Communication extends Component {
    render() {
        return (
            <div className="block__call">
                <div className="block__call__titel">Сомниваетесь?</div>
                <div className="block__call__information">
                    <div className="block__call__information__inner">
                        <h6 className="block__call__information__inner__titel">Давайте обсудим</h6>
                        <p className="block__call__information__inner__discription">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Commodi sed deleniti, expedita corporis quis magnam. 
                            Dignissimos veniam magni animi tempore! Repellat doloremque.
                        </p>
                    </div>
                    <div className="block__call__link">
                        <a href="#" className="block__call__information__link">Обсудить проект</a>
                    </div>                        
                </div>
            </div>
        );
    }
}

export default Communication;