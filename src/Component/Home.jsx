import React, { useState } from "react";
import first from "../Images/bg-1.png";
import second from "../Images/bg-2.png";
import third from "../Images/bg-3.png";
// import forth from '../Images/bg-4.jpg';
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main_header">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <div className="row">
                <div className="col-md-6 col-12 main_header_left">
                  <p>Welcome to TalkieWeatherHub App</p>
                  <h1>
                    Get the latest{" "}
                    <span className="txt_clr">Movie - Weather</span> info here
                  </h1>
                  <div>
                    <NavLink to="/Movie" className="coolBeans">
                      <b>Movie</b>
                    </NavLink>
                    <NavLink to="/Weather" className="coolBeans">
                      <b>Weather</b>
                    </NavLink>
                    <NavLink to="/Texttospeech" className="coolBeans">
                      <b>Text to Speech</b>
                    </NavLink>
                    {/* <a href="/Movie"><button>Movie</button></a>
                <a href="/Weather"><button>Weather</button></a> */}
                  </div>
                </div>
                <div className="col-md-6 col-12 main_header_right home_header_right">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className={`carousel-item ${
                          activeIndex === 0 ? "active" : ""
                        }`}
                      >
                        <img src={first} alt="First slide" className="w-100" />
                      </div>
                      <div
                        className={`carousel-item ${
                          activeIndex === 1 ? "active" : ""
                        }`}
                      >
                        <img
                          src={second}
                          alt="Second slide"
                          className="w-100"
                        />
                      </div>
                      <div
                        className={`carousel-item ${
                          activeIndex === 2 ? "active" : ""
                        }`}
                      >
                        <img src={third} alt="Third slide" className="w-100" />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                      onClick={handlePrevSlide}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                      onClick={handleNextSlide}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
