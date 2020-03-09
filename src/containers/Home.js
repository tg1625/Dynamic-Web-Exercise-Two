import React, {useEffect, useState} from "react";
import axios from "axios";

import { useHistory} from "react-router-dom";

//API Key
const defaultKey = "77fa4162992373c356c1c0e0bebc7541";

function Home(){

    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("");
    const [currentTemp, setCurrentTemperature] = useState("");
    const [highTemp, setHighTemperature] = useState("");
    const [lowTemp, setLowTemperature] = useState("");
    const [icon, setIcon] = useState("01n");
    const [wind, setWind] = useState("");
    const [humidity,setHumidity] = useState("");
    const [cloudiness, setCloudiness] = useState("");


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
            console.log(`Query: https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${"imperial"}&appid=${defaultKey}`);
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
            setIcon(weatherData.weather[0].icon);
            setHumidity(weatherData.main.humidity);
            
        }
        if (weatherData.wind){
            setWind(weatherData.wind.speed);
        }
        if (weatherData.clouds){
            setCloudiness(weatherData.clouds.all/200);
        }
    }, [weatherData]);

    console.log("Weather data: ", weatherData);

    return(
        <div className="home" style={{backgroundColor: `rgba(0,0,0,${cloudiness})`}}>
            <h1>{city}</h1>

            <div className="weatherInfo">
                <div className="weatherInfo_Image">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                </div>
                <div className="weatherInfo_Data">
                    <div className="currentTemperature">
                        <p>{currentTemp}&#176;</p>
                    </div>
                    <div className="otherTemperature">
                        <p>High temp: <strong>{highTemp}&#176;</strong></p>
                        <p>Low temp: <strong>{lowTemp}&#176;</strong></p>
                    </div>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind: {wind}mph</p>
                </div>
            </div>

        </div>
    );
}

export default Home;