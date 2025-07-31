import * as React from 'react';
import Card from '@mui/material/Card';;
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress'; // symbolic
import AirIcon from '@mui/icons-material/Air';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';         // cloudy, hazy
import WbSunnyIcon from '@mui/icons-material/WbSunny';           // sunny
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; // storm
import GrainIcon from '@mui/icons-material/Grain';               // rainy


export default function InfoBox({ weatherData }) {
    const Init_URL = "https://media.istockphoto.com/id/611879528/photo/evening-over-noida-delhi-buildings.webp?a=1&b=1&s=612x612&w=0&k=20&c=8cCqAqPpaZJDIrndCmzPGoK7jS3Zq3b5MK6kBMN_BSA="

    const Hot_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const Cold_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const Rainy_URL = "https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    if (!weatherData) {
        return <div className="info-box">No weather data available</div>;
    }

    return (
        <div className="info-box">
            <div className="card-container">
                <Card className="glass-card" sx={{ width: 345, minHeight: 400 }}>


                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherData.humidity > 80 ? Rainy_URL : weatherData.temp > 30 ? Hot_URL : weatherData.temp < 10 ? Cold_URL : Init_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherData.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
    <div className="info-row"><ThermostatIcon className="info-icon" />Temperature: {weatherData.temp}&deg;C</div>
    <div className="info-row"><WaterDropIcon className="info-icon" />Humidity: {weatherData.humidity}%</div>
    <div className="info-row"><DeviceThermostatIcon className="info-icon" />Feels Like: {weatherData.feels_like}&deg;C</div>
    <div className="info-row"><CompressIcon className="info-icon" />Pressure: {weatherData.pressure} hPa</div>
    <div className="info-row"><AirIcon className="info-icon" />Wind Speed: {weatherData.windSpeed} m/s</div>
    <div className="info-row"><WbCloudyIcon className="info-icon" />Weather: {weatherData.weather}</div>
</Typography>


                    </CardContent>
                </Card>
            </div>
        </div>
    );
}