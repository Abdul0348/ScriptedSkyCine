import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { TiWeatherWindyCloudy } from "react-icons/ti";

function Weather() {
    // ... (your other state variables and functions)
    const [cityName, setCityName] = useState("");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [tempStatus, setTempStatus] = useState("");
    const [datahide, setDataHide] = useState(true);

    const getInfo = async (event) => {
        event.preventDefault();

        if (cityName === "") {
            alert("Please enter the name of the City before searching.");
            setDataHide(true);
        } else {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=51463a0e5db0a8a69a098b12867dd9ab`;
                const response = await fetch(url);
                const data = await response.json();

                setCity(`${data.name}, ${data.sys.country}`);
                setTemp(data.main.temp);

                const tempMood = data.weather[0].main;
                let tempStatusIcon;
                // Condition to check Sunny, Cloudy, or Rainy
                if (tempMood === "Clear") {
                    tempStatusIcon = "☀️";
                } else if (tempMood === "Clouds") {
                    tempStatusIcon = "☁️";
                } else if (tempMood === "Rain") {
                    tempStatusIcon = "🌧️";
                } else {
                    tempStatusIcon = "🌦️";
                }

                setTempStatus(tempStatusIcon);
                setDataHide(false);
            } catch {
                setDataHide(true);
            }
        }
    }

    return (
        <>
        <div className="App">
            <Navbar />
            <div className="main_header">
                 <div className="row">                     
                 <div className="col-md-10 col-12 mx-auto">                    
                  <h1 className='top'>We are dedicated to providing you with a<span className="txt_clr"> seamless and enriching weather </span>experience. Bookmark us today for all your weather needs.</h1>
                         <div className="container-fluid  main_content center">
                             <form className="temp_form center">
                             <input type="text" id="searchInput" value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder="Enter your city name.." autoComplete="off"/>
                             <button className="btn btn-dark btn-lg" value="search" onClick={getInfo}><TiWeatherWindyCloudy className='icon' />Search</button>
                             </form>           
                            <div className="tempInformation">
                            <div className="top_layer">
                            {/* Display dynamic day and date */}
                            <p id="day">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
                            <p id="today_date">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                            <div className={`main_layer ${datahide ? 'data_hide' : ''}`}>
                            <p id="city_name">{city}</p>
                                <div className="middle_layer">
                                <p id="temp"><span id="temp_real_val">{temp}</span><sup>o</sup>C</p>
                                <p id="temp_status">{tempStatus}</p>
                                </div>
                            </div>
                            </div>
                         </div>
                    </div>
                 </div>             
                 </div>            
                <Footer />
            </div>
        </>
    )
}

export default Weather;