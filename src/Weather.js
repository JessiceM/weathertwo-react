import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="row">
                <div className="col-6">
                    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Mostly Cloudy" />
                </div>
                <div className="col-6">
                <h1>72° C</h1>
            <ul>
                <li>Cloudy Sky</li>
                <li>Humidity %</li>
                <li>Wind mph</li>
            </ul>

</div>

            </div>
            
        </div>
        
    )
}