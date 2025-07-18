import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    let API_URL= "http://api.openweathermap.org/geo/1.0/direct?q=";
    const API_KEY = "6470ab64e809c7f907905641df53f264";;

    
       
const getWeatherInfo = async () => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        let result = {
            name: data.name,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            weather: data.weather[0].description
        }
        return result
    
    } catch (err) {
        console.error(err);
       setError("No such place found in our API")
       return null
    }
};

    let handleChange = (e)=>{
        setCity(e.target.value);
    }
    let handleSubmit =async (e)=>{
        e.preventDefault();
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);

    }
    return(
        <div className="search-box">
            <form action="" onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                 <br /><br />
                 <Button variant="contained" type='submit'  endIcon={<SendIcon />}>
        Search
      </Button>
            </form>
            </div>  

    )
}