import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import video from './facebook_video.mp4'
import axios from 'axios';


const Video = () => {
  
  const {id} = useParams();
  // video.embedUrls[0].url

  const [data, setData] = useState()
  const [videoUrl, setVideoUrl] = useState()

    const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/movies', headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    

    

    useEffect(() => {
        const fetchVideoUrl = () => {
        axios.request(fetchData).then(function (response) {
          const video = response.data.results.find(d => d._id === id);
          setData(video)
          setVideoUrl(video.embedUrls.find(e => e.server === 'uqload').url)
        }).catch(function (error) {
            console.error(error);
        });
    }
        fetchVideoUrl();
    }, []);

  return (
    <div className={styles.video_container}>
      <div className={styles.video}>

        <iframe src={videoUrl} style={{width: '450px', height: '350px'}}></iframe>
        {/* <video controls >
            <source src={source} type='video/mp4' />
            <source src={source} type='video/ogg' />
          </video> */}
        </div>

        <div className={styles.video_details}>
          {/* <h2>{ data.titleOriginal }</h2>
          <span>{data.genres[0].name}</span> */}
        </div>
    </div>
  )
}

export default Video