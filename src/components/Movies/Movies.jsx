import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { PlayIcon } from '@radix-ui/react-icons';
import Navbar from '../Navbar/Navbar';



const Movies = () => {

    const [data, setData] = useState([])

    const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/episodes', headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    
    

    useEffect(() => {
        const fetchVideo = () => {
        axios.request(fetchData).then(function (response) {
        const mainData = response.data.results;
            setData(mainData);
        }).catch(function (error) {
            console.error(error);
        });
    }
        fetchVideo();
    }, []);

    return (
        <div className={styles.movies_container}>
            <div className={styles.navbar_container}>
                <Navbar />
            </div>
            <div className={styles.heading}>
                <h1>Movies</h1>
            </div>

            <div className="single_movie">
                {data.length ? 
                    <div className={styles.videos}>
                        {data.map((movie, index) => {
                            return (
                                <div className={styles.video} key={index}>
                                    <div className={styles.video_img}>
                                        <img src={movie.serie.image} alt="movie-image" className={styles.video_image} />
                                    </div>
                                    
                                    <div className={styles.details}>
                                            <div className={styles.avatar}>
                                                <img src={movie.serie.image} alt="user-avatar" className={styles.avatar_img} />
                                            </div>

                                            <div className={styles.title}>
                                                <h4>{movie.serie.titleOriginal}</h4>
                                                <div className={styles.genre}>
                                                    <small>{movie.serie.genres[0].name}</small>
                                                    <small>Rating: {movie.serie.rating}</small>
                                                    <small>{movie.serie.countries[0].name}</small>
                                                </div>
                                            </div>
                                    </div>

                                    <div className={styles.detail}>
                                        <small>Season: { movie.season }</small>
                                        <small>Episode: { movie.episode }</small>
                                        <small className={styles.date}>Year: {movie.serie.year} </small>
                                    </div>

                                <Link to={`/video/${movie._id}`}>
                                        <div className={styles.play_btn}>
                                            <button className={styles.play_button}>
                                                <PlayIcon className={styles.play} />
                                                <span className={styles.play}>Watch Movie</span>
                                            </button>
                                        </div>
                                </Link>
                                        
                            </div>
                            )
                        })}
                    </div>
                : <p className={styles.loading}>Loading movies please wait .......</p>}
            </div>
        </div>
    )
}

export default Movies