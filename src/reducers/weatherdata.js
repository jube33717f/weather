const inititalState = {
    weatherdata:''
}
console.log('======')
const weatherdata = (state = inititalState, action) => {
    console.log('======', action)
    switch (action.type) {
        case 'CHANGE_WEATHER_DATA':
        console.log('======', action.weathedata)
        return {
            ...state,
            weatherdata: action.weatherdata.weatherdata
        }
        default:
        return state;
    }

}
  
export default weatherdata;