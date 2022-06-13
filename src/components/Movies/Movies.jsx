import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './styles.module.css'
import image from './1.jpg'
import {PlusIcon, ChevronRightIcon} from '@radix-ui/react-icons'
import MovieCard from '../MovieCards/MovieCard'
import axios from 'axios'
import Watching from '../Watching/Watching'
import Footer from '../Footer/Footer'




const Movies = () => {

  const [data, setData] = useState([])

  const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/movies', params: {page: '3'} , headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    


  const fetchVideo = () => {
        axios.request(fetchData).then(function (response) {
        const mainData = response.data.results;
            setData(mainData);
        }).catch(function (error) {
            console.error(error);
        });
  }
  

  useEffect(() => {
    fetchVideo();
  }, []);


  return (
    <div className={styles.movie}>
        <Navbar />
        <Featured data={data} />
        <MovieCard data={data} />
        <Watching data={data} />
        <Footer />
    </div>
  )
}

export default Movies



export const Featured = ({ data }) => {
  return (
    
      <div className={styles.featured_movie}>

        <div className={styles.background}>
            <img src={data[0].image} alt="" className={styles.background_image} />
            <ChevronRightIcon className={styles.next}/>
        </div>

        <div className={styles.title}>
            <h2>{data[0].titleOriginal}</h2>
            <small>{data[0].genres[0].name}</small>
        </div>
        

        <div className={styles.buttons}>
            <button className={styles.watch}>watch</button>
            <PlusIcon className={styles.plus}/>
        </div>


      </div>
    
  )
}

