import React,{Component} from 'react'
import './weather.scss';

import Menu from './menu'
import Header from './cardHeader'
import TwitterFeed from './cardBLeft'
import WeatherFor from './cardBRight'
export default class Weather extends Component{
    render(){
        return(<div>
            <Menu/>
            <div className="card">
                <Header/>
                <div className="card_bottom">
                    <TwitterFeed/>
                    <WeatherFor/>
                </div>
            </div>
        </div>)
    }
}