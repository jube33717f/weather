import React,{Component} from 'react'
import './weather.scss';
import './cardHeader.scss';
import bg1 from './img/header.jpeg'
import bg2 from './img/weather.png'
import axios from 'axios'
import { connect } from 'react-redux';
import {changeWeatherData} from './actions'
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[{location:"FRANCE",degree:12,description:'cloudy',humidity:'67%',UVindex:'0(Low)'}],
            lat:0,
            lng:0,
            position:'France',
            country:'',
            degree:12,
            description:'cloudy',
            humidity:67,
            wind:4.43,
        }
    }
    async componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            let latitude  = position.coords.latitude;
            let longitude = position.coords.longitude;
            // console.log(latitude,',',longitude)
            this.setState({lat:latitude,lng:longitude})
        },()=>{console.log('error')})
        
    }
    async componentDidUpdate(prevProps, prevState){
        // console.log(prevState)
        //changeWeatherData('b')
        if(prevState.lat!==this.state.lat||prevState.lng!==this.state.lng){
            // console.log(this.state.lat)
            let apikey='5fd90c67a09815ca08b3dc39a36c4ba8'
            // ${this.state.lat}${this.state.lng}
            let requestURL=`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}&appid=${apikey}`
            
            const res =await axios.get(requestURL);
                
            if(res.status === 200){
                // const weatherContent = await res.json();
                console.log(res.data)
                
                
                

                
                this.setState({position:res.data.city.name})
                this.setState({country:res.data.city.country})
                this.setState({degree:Math.round(res.data.list[0].main.temp-273.15)})
                this.setState({description:res.data.list[0].weather[0].main})
                this.setState({humidity:res.data.list[0].main.humidity})
                this.setState({wind:res.data.list[0].wind.speed})
                let a=res.data.list.filter(item=>item.dt_txt.split(' ')[0]!==res.data.list[0].dt_txt.split(' ')[0]
                ).filter(item=>item.dt_txt.split(' ')[1]=="12:00:00"
                )
                const {changeWeatherData}=this.props;//important!
                let b=[]
                a.map((item,index)=>{
                    //weekday:'Mon' , icon: '💧', degree: 9, description:'raining'
                    let date_ = item.dt_txt;
                    let icon_ = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                    let degree_ = Math.round(item.main.temp-273.15);
                    let description_ = item.weather[0].main;
                    b.push({date:date_,icon:icon_,degree:degree_,description:description_})
                })

                changeWeatherData({weatherdata:b});
                setTimeout(console.log(this.props.weatherdata),3000)
                // this.setState({description:res.data.city.name})
                // this.setState({description:res.data.city.name})

        
            }else{
                throw Error(res.statusText);
            }
            
            
        }
    }
    render(){
        return (
            <div className="header">
                <div className="header__img">
                    <img src={bg1}></img>
                </div>
                <div  className="header__location">
                    <div className="line1"></div>
                    <h1>{this.state.position} </h1>
                    <div className="line2"></div>
                    <p>·{this.state.country}</p>
                </div>
                <div className="header__img2">
                    <img src={bg2}></img>
                </div>
                
                <div className="header__degree">
                    
                    <div className="header__degree-round">
                    <h1>{this.state.degree}</h1>
                    </div>
                    <h3>{this.state.description}</h3>
                    <div className="header__degree-detail h_l">
                        <p>Humidity</p>
                        <p>{this.state.humidity}%</p>
                    </div>
                    <div className="line3"></div>
                    <div className="header__degree-detail h_r">
                        <p>Wind</p>
                        <p>{this.state.wind}m/s</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state.weatherdata.weatherdata)
    return {
      weatherdata: state.weatherdata.weatherdata,
    }
}
  
  
export default connect(mapStateToProps, {
    changeWeatherData,
})(Header);
