export function changeWeatherData(weatherdata) {
    console.log(weatherdata)
    return {
      type: "CHANGE_WEATHER_DATA",
      weatherdata
    };
  }