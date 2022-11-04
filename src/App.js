import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">

      <form>
        <input type="search" placeholder="Enter a city" className="form-control"/>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
<h1>Dallas</h1>
<footer>
  This project was coded by<a href="" target="_blank"> Jessica Mendoza </a>  and is 
<a href="https://github.com/JessiceM/weathertwo-react" target="_blank"> open-sourced on GitHub </a>
 and hosted on Netlify
</footer>
      </div>
    </div>
  );
}


