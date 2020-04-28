import React,{Component} from 'react'
import './weather.scss';
import './cardBRight.scss';
import { connect } from 'react-redux';
import {changeWeatherData} from './actions'
class WeatherFor extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data : [{weekday:'Mon' , icon: '💧', degree: 9, description:'raining'},{weekday:'TUE' , icon: '🌞', degree: 15, description:'sunny'},{weekday:'WED' , icon: '🌥', degree: 11, description:'cloudy'},{weekday:'THU' , icon: '🌩', degree: 7, description:'lightening'},{weekday:'FRI' , icon: '🌞', degree: 18, description:'sunny'}],
            weatherdata:''
        } 
    }
    
    getDay(date){
        let num = (new Date(date)).getDay()
        switch(num){
            case 1: return 'MON'
            case 2: return 'TUE'
            case 3: return 'WED'
            case 4: return 'TUE'
            case 5: return 'FRI'
            case 6: return 'SAT'
            case 0: return 'SUN'
        }
    }
    render(){
        
        return (
            <div className="weeklyWeather">
                {this.props.weatherdata?this.props.weatherdata.map((item,index)=>{
                    // let weekday = getDay(item.dt_txt)
                    console.log(item)
                    return (<div key={index} className="weeklyWeather__forecast">
                    <h1>{this.getDay(item.date)}</h1>
                    <div className="weathericon"><img src={item.icon}></img></div>
                    <h2>{item.degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{item.description}</p>
                </div>)
                }):<div>Loading</div>}
                
                 {/* <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[0].weekday}</h1>
                    <div className="weathericon">{this.state.data[0].icon}</div>
                    <h2>{this.state.data[0].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[0].description}</p>
                </div>
                <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[1].weekday}</h1>
                    <div className="weathericon">{this.state.data[1].icon}</div>
                    <h2>{this.state.data[1].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[1].description}</p>
                </div>
                <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[2].weekday}</h1>
                    <div className="weathericon">{this.state.data[2].icon}</div>
                    <h2>{this.state.data[2].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[2].description}</p>
                </div> */}
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      weatherdata: state.weatherdata.weatherdata,
    }
}
  
  
// export default connect(mapStateToProps)(WeatherFor);
export default connect(mapStateToProps, {
    changeWeatherData,
})(WeatherFor);
