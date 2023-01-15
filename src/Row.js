import React from 'react'
import './Row.css'
import { useState, useEffect } from 'react'
import axios from './axios'

const Row = ({ title, fetchUrl, isLargeRow=false }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(fetchUrl)
                setMovies(response.data.results)
            }catch (err) {
                if (err.response){
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                    } else {
                        console.log(`Error: ${err.message}`)
                    }
                }
        };
        fetchData();
    }, [fetchUrl]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) )&& (
                        <img key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row-poster ${isLargeRow && "row-poster-large"}`}/>
                    )
                    
                ))}
            </div>
            
        </div>
    )
}

export default Row