import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    let API_URL= "http://api.openweathermap.org/geo/1.0/direct?q=";
    const API_KEY = "6470ab64e809c7f907905641df53f264";;

    
    
const getWeatherInfo = async () => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await res.json();

        if (data.cod !== 200) {
            setError("City not found!");
            return null;
        }

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

        setError(""); // Clear any old errors
        return result;

    } catch (err) {
        console.error(err);
        setError("Something went wrong!");
        return null;
    }
};


    let handleChange = (e)=>{
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setCity(""); // Clear input
    let newInfo = await getWeatherInfo();
    setLoading(false); // End loading

    if (newInfo) {
        updateInfo(newInfo);
    }
};

    return(
        <div className="search-box">
            <form action="" onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                 <br /><br />
                 <Button
  type="submit"
  variant="contained"
  endIcon={<SearchIcon />}
  sx={{
    mt: 2,
    px: 3,
    py: 1.5,
    fontWeight: 'bold',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'scale(0.97)',
    },
    // Adjust for light mode:
    ...(document.body.className === 'light-mode' && {
      background: 'rgba(0, 0, 0, 0.1)',
      color: '#000',
      border: '1px solid rgba(0,0,0,0.2)',
    })
  }}
>
  Search
</Button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            </form>
           
{loading && <CircularProgress style={{ marginTop: "10px" }} />}

            </div>  
             

    )
}