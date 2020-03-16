import React, {useEffect, useState} from "react";
import axios from "axios";

import { useHistory} from "react-router-dom";
import WeatherImage from '../components/WeatherImage.js';

//API Key
const defaultKey = "77fa4162992373c356c1c0e0bebc7541";

function Home(){

    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("");
    const [currentTemp, setCurrentTemperature] = useState("");
    const [highTemp, setHighTemperature] = useState("");
    const [lowTemp, setLowTemperature] = useState("");
    const [wind, setWind] = useState("");
    const [humidity,setHumidity] = useState("");
    const [cloudiness, setCloudiness] = useState("");
    const [weatherType, setWeatherType] = useState("");


    let history = useHistory();
    //get city from URL
    useEffect(() =>{
        //get search parameters
        let searchParams = history.location.search;
        const urlParams = new URLSearchParams(searchParams);
        let city = urlParams.get("city");
        if(city){
            setCity(city);
        }
    }, [history])

    //get API data 
    useEffect(() =>{   
        if(city){
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${"imperial"}&appid=${defaultKey}`
            )
        .then(function(response){
            setWeatherData(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
        }   
    }, [city]);

    //set temperature data
    useEffect(() => {
        if (weatherData.main){
            setCurrentTemperature(weatherData.main.temp);
            setHighTemperature(weatherData.main.temp_max);
            setLowTemperature(weatherData.main.temp_min);
            setHumidity(weatherData.main.humidity);
            setWind(weatherData.wind.speed);
            setCloudiness(weatherData.clouds.all/200);
            setWeatherType(weatherData.weather[0].main);
            
        }
    }, [weatherData]);


    return(
        <div className="home" style={{backgroundColor: `rgba(0,0,0,${cloudiness})`}}>
            <h1>{city}</h1>

            <div className="weatherInfo">
                <WeatherImage weatherType={weatherType} />
                <div className="weatherInfo_Data">
                    <div className="currentTemperature">
                        <p>{currentTemp}&#176;</p>
                    </div>
                    <div className="otherTemperature">
                        <p>High: <strong>{highTemp}&#176;</strong></p>
                        <p>Low: <strong>{lowTemp}&#176;</strong></p>
                    </div>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind: {wind}mph</p>
                </div>
            </div>

        </div>
    );
}

export default Home;