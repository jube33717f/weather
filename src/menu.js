import React from 'react';
import './weather.scss';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="menu">
                    <div className="menu_icon"></div>
                    <div className="menu_icon"></div>
                    <div className="menu_icon"></div>
                </div>
                <div className="arrow">
                    <div className="arrow_round">
                        <div className="arrow_right"></div>
                        <div className="arrow_line"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;