import * as React from 'react';
import Card from '@mui/material/Card';;
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

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
                <Card sx={{ width: 345, minHeight: 400 }}>


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
                            <p>Temperature = {weatherData.temp}&deg;C </p>
                            <p>Humidity = {weatherData.humidity} </p>
                            <p>Minimum temp = {weatherData.temp_min}&deg;C </p>
                            <p>Maximum temp = {weatherData.temp_max}&deg;C </p>
                            <p>Weather feels like {weatherData.feels_like}&deg;C </p>
                            <p>Weather = {weatherData.weather} </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}