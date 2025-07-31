import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherData, setWeatherData] = useState({
        name: "Delhi",
        temp: 24.84,
        feels_like: 24.84,
        temp_min: "Min Temperature",
        temp_max: "Max Temperature",
        humidity: "Humidity",
        pressure: "Pressure",
        windSpeed: "Wind Speed",
        weather: "Hazy"
    });

    let updateWeatherData = (data) => {
        setWeatherData({
            name: data.name,
            temp: data.temp,
            feels_like: data.feels_like,
            temp_min: data.temp_min,
            temp_max: data.temp_max,
            humidity: data.humidity,
            pressure: data.pressure,
            windSpeed: data.windSpeed,
            weather: data.weather
        })
  
}
  return (
        <div className="weather-app">
            <div className="heading-box">
    <h1>Nimbus </h1>
    <h2><i>~Where clouds spill the tea!</i></h2>
</div>
            <SearchBox updateInfo={updateWeatherData} />
            <InfoBox weatherData={weatherData} />
        </div>
    );}