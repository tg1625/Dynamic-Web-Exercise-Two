import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';

function WeatherImage({weatherType}){
    console.log("weatherType", weatherType);
    const Icon = ({weatherType}) =>{
        switch(weatherType){
            case 'Clouds': return <FontAwesomeIcon icon={faCloud} />
            case 'Rainy': return <FontAwesomeIcon icon={faCloudRain} />
            case 'Clear': return <FontAwesomeIcon icon={faSun} />
            default: return <FontAwesomeIcon icon={faSun} />
        }
    }

    return (
        <div className="weatherInfo_Image">
            <Icon weatherType={weatherType} />
        </div>

    );   
}

export default WeatherImage;