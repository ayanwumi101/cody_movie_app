import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './styles.module.css'
import {EyeOpenIcon, PlayIcon} from '@radix-ui/react-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'





const Videos = () => {

    const [data, setData] = useState([])

    const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/movies', headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    

    

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
      <div className={styles.videos_container}>
          
          <Navbar />


        <>
        
        {data.length ?  (<div className={styles.videos}>
                
              {data.map((video, index) => {
                  return (
                
                    
                    <div className={styles.video} key={index}>
                        <div className={styles.video_img}>
                            <img src={video.image} alt="movie-image" className={styles.video_image} />
                        </div>
                        
                        <div className={styles.details}>
                                <div className={styles.avatar}>
                                    <img src={video.image} alt="user-avatar" className={styles.avatar_img} />
                                </div>

                                <div className={styles.title}>
                                      <h4>{video.titleOriginal}</h4>
                                      <span>{ video.genres[0].name }</span>
                                    <div className={styles.detail}>
                                        <span className={styles.views}>
                                            <strong>Rating:</strong>
                                            <small>{video.rating}</small>
                                        </span>
                                        <small className={styles.date}>Year: {video.year} </small>
                                    </div>
                                </div>
                        </div>

                       <Link to={`/video/${video._id}`}>
                            <div className={styles.play_btn}>
                                <button className={styles.play_button}>
                                    <PlayIcon className={styles.play} />
                                    <span className={styles.play}>Play video</span>
                                </button>
                            </div>
                       </Link>
                              
                    </div>
                  )
              })}
          </div>) : <p className={styles.loading}>Loading videos please wait......</p>}
          
        </>
      </div>
  )
}

export default Videos