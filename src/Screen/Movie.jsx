import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
// import { RiSearch2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";

function Movie() {
    const apiKey = '12038eb9'; // Replace with your actual API key
    const apiUrl = 'https://www.omdbapi.com/';

    async function searchMovies() {
        const searchInput = document.getElementById('searchInput').value;

        if (searchInput.trim() === '') {
            alert('Please enter Movie title before searching.');
            return;
        }

        const url = `${apiUrl}?apikey=${apiKey}&s=${searchInput}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                displayMovies(data.Search.slice(0, 3));
            } else {
                alert('No movies found. Please try again.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayMovies(movies) {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const imgSrc = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image.jpg';
            movieCard.innerHTML = `
            <img src="${imgSrc}" alt="${movie.Title}" onclick="openMoviePage('${movie.imdbID}')">
            <div class="movie-title">${movie.Title}</div>
            `;

            movieList.appendChild(movieCard);
        });
    }

    function openMoviePage(imdbID) {
        window.open(`https://www.imdb.com/title/${imdbID}`, '_blank');
    }

    return (
        <>
        <div className="App">
            <Navbar />
            <div className="container"> 
                <h1 className='top'><span className="txt_clr">Enter the title of Movie</span> you're looking for to access comprehensive information, including details on genre, release year, director, cast, and more about your favorite films.</h1>
                <div className='center'>
                <input type="text" id="searchInput" placeholder="Search for a movie" />
                <button className="btn btn-dark btn-lg" onClick={searchMovies}><BiCameraMovie className='icon' />Search</button>
                </div>
                <div id="movieList" className="movie-list"></div> 
            </div>
            <Footer />
            </div>
        </>
    );
}

export default Movie;
