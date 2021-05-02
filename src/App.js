import './App.css';
import  Button from '@material-ui/core/Button';
import React, { useEffect, useState } from "react";
import CurrentWeatherComponent from "./currentWeather.js";
import apiKey from "./keys.js";
import DailyWeatherForecast from "./dailyForecast.js";
import "./weather.css";
import moment from "moment";


function App() {
  const [weather, setWeather] = useState(null);
  const [zip, setZip] = useState()
  const [searched, setSearched] = useState(false);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [forecast, setForecast] = useState();
  var x = document.getElementById("error");
  // const apiKey = '81e81a574ae33e2c2959426b6da2e76d';

  useEffect(() => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", apiKey);
    url.searchParams.append("zip", zip);
    url.searchParams.append("units", "imperial")
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setWeather(obj);
      });
}, [zip]);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(grabPosition);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}

function grabPosition(position) {
  setLat(position.coords.latitude);
  setLong(position.coords.longitude);
};

useEffect(() => {
  const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
  url.searchParams.append("appid", apiKey);
  url.searchParams.append("lat", lat);
  url.searchParams.append("lon", long)
  url.searchParams.append("units", "imperial")
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((obj) => {
      setForecast(obj);
    });
}, [lat && long]);


  console.log(weather)
  console.log(forecast);


if (searched == false) {
  return (
    <>
    <div id="searchdiv">
    <p id="error"></p>
    <h1 className="header">Better Than Weather.com</h1>
      <div id="input">
      <input placeholder="Zip Code" onChange={(event) => setZip(event.target.value)}/>
      </div>
      <div id="search">
      <Button variant ="contained" onClick={() => setSearched(true)}>Search</Button>
      </div>
    </div>
    </>

  
  )};

  return (
  <>
  <h4 id="currentdate">{moment().format('LLLL')}</h4>
  <CurrentWeatherComponent weather={weather}/>
  <DailyWeatherForecast forecast={forecast}/>
  </>
  );
 
}

export default App;
