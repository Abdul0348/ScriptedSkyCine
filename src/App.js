import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Movie from './Screen/Movie';
import Weather from './Screen/Weather';
import Texttospeech from './Screen/Texttospeech';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movie" element={<Movie />} />
      <Route path="/Weather" element={<Weather />} />
      <Route path="/Texttospeech" element={<Texttospeech />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App