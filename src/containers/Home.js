import React, {useEffect, useState} from "react";
import axios from "axios";

//API Key
const defaultKey = "3170d73852c5601a02c180337486d21c";

function Home(){

    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("Arcahaie");
    const [currentTemp, setCurrentTemperature] = useState("");
    const [highTemp, setHighTemperature] = useState("");
    const [lowTemp, setLowTemperature] = useState("");
    const [icon, setIcon] = useState("");
    const [wind, setWind] = useState("");
    const [humidity,setHumidity] = useState("");

    //get API data 
    useEffect(() =>{
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${"imperial"}&appid=${defaultKey}`
            )
        .then(function(response){
            setWeatherData(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);

    //set temperature data
    useEffect(() => {
        if (weatherData.main){
            setCurrentTemperature(weatherData.main.temp);
            setHighTemperature(weatherData.main.temp_max);
            setLowTemperature(weatherData.main.temp_min);
            setIcon(weatherData.weather[0].icon);
            setHumidity(weatherData.main.humidity);
            console.log(icon);
        }
        if (weatherData.wind){
            setWind(weatherData.wind.speed);
        }
    }, [weatherData]);

    console.log("weatherData", weatherData);

    return(
        <div className="home">
            <h1>Weather in {city}</h1>

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