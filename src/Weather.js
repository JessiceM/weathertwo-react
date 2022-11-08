import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
        
            <div className="row ">
                <div className="col-7">
                    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Mostly Cloudy" />
                    <div className="condition">Cloudy Sky</div>
                </div>
                <div className="col-4 align-self-center">
                    <h1><span className="temperature">15</span><span className="unit">°c</span></h1>
                    <ul>
                        <li>💧Humidity %</li>
                        <li>💨Wind mph</li> 
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-center"><h4>Friday, 4 November</h4></div>
            
        </div>
        
    )
}