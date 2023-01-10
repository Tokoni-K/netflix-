import React from 'react';
import './Banner.css';
import { useState, useEffect } from 'react';
import axios from './axios';
import requests from './Request';

const Banner = () => {

const [movie, setMovie] = useState([]);

useEffect(() => {
    const fetchMovie = async () => {
        try{
            const response = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
        )}
        catch (err) {
            if (err.response){
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(`Error: ${err.message}`);
            }
        }};

        fetchMovie();
}, []); 

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }

    return (
        <header className='banner'  style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} >
            <div className="banner-contents">
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button >
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner-fade-bottom'/>
        </header>
    )
}

export default Banner