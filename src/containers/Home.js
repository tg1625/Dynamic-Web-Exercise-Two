import React from "react";

//API Key
const defaultKey = "3170d73852c5601a02c180337486d21c";

function Home(){
    return(
        <div className="home">
            <h1>Weather in "City"</h1>

            <div className="weatherInfo">
                <div className="weatherInfo_Image">
                    <img src=""/>
                </div>
                <div className="weatherInfo_Data">
                    <div className="currentTemperature">
                        <p>00&#176;</p>
                    </div>
                    <div className="otherTemperature">
                        <p>High temp: <strong>00&#176;</strong></p>
                        <p>Low temp: <strong>00&#176;</strong></p>
                    </div>
                    <p>Humidity: 00%</p>
                    <p>Wind: 00mph</p>
                </div>
            </div>

        </div>
    );
}

export default Home;