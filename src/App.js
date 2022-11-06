import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <form>
          <div className="row">
            <div className="col-5">
              <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
            </div>
            {/*autoFocus immediately focuses on search bar */}
            <div className="col-3">
              <input type="submit" value="🔍" className="btn btn-warning" />
              <input type="submit" value="📍" className="btn btn-warning" />
            </div>
        
          </div>
        </form>
        <h1 className="city">Dallas</h1>
        <Weather />
        <footer>
          This project was coded by<a href="" target="_blank"> Jessica Mendoza </a>  and is 
            <a href="https://github.com/JessiceM/weathertwo-react" target="_blank"> open-sourced on GitHub </a>
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}


