import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './styles.module.css'
import {PlusIcon, ChevronRightIcon} from '@radix-ui/react-icons'
import MovieCard from '../MovieCards/MovieCard'
import axios from 'axios'
import Watching from '../Watching/Watching'
import Footer from '../Footer/Footer'




const Poster = () => {

  const [card, setCard] = useState([])
  const [watching, setWatching] = useState([])
  // const [data, setData] = useState([]);
  // const [index, setIndex] = useState(0);
  // const [image, setImage] = useState([])
  
  

    const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/movies', params: {page: '2'}, headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    

    

    useEffect(() => {
        const fetchVideo = () => {
          axios.request(fetchData).then(function (response) {
          const otherData = response.data.results.slice(0, 13);
          const lastData = response.data.results.slice(13, 24);
          // const imageData = response.data.results[index].image;
          // const movieData = response.data.results;
            setCard(otherData)
            setWatching(lastData);
            // setImage(imageData);
            // setData(movieData)
        }).catch(function (error) {
            console.error(error);
        });
    }
        fetchVideo();
    }, []);

  return (
    <div className={styles.movie}>
        <Navbar />
        <Featured />
        <MovieCard card={card} />
        <Watching watching={watching} />
        <Footer />
    </div>
  )
}

export default Poster


export const Featured = () => {
  
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([])
   const fetchData = { method: 'GET', url: 'https://movies-app1.p.rapidapi.com/api/movies', params: {page: '2'}, headers: { 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com', 'X-RapidAPI-Key': 'd130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b' } };    

  
    useEffect(() => {
    
      const fetchVideo = () => {
          axios.request(fetchData).then(function (response) {
          
          const imageData = response.data.results.slice(0,23);
          // const movieData = response.data.results;
            console.log(imageData);
             imageData.map((item) => setImage(prev => [...prev, item.image]));
            
            // setData(movieData)
        }).catch(function (error) {
            console.error(error);
        });
      }
        fetchVideo();
    }, []);
  
    

    const nextImage = (e) => {
      if (index === image.length - 1) {
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
      
      console.log('clicked', index)
    }
  
  

  return (
    
      <div className={styles.featured_movie}>
        {/* <p>{image[0]}</p> */}
        <div className={styles.background}>
            <img src={image && image[index]} alt="" className={styles.background_image} />
            <ChevronRightIcon className={styles.next} onClick={nextImage} />
        </div>

        <div className={styles.title}>
            {/* <h2>{data.titleOriginal}</h2> */}
            {/* <small>{data.genres[0].name}</small> */}
        </div>
        

        <div className={styles.buttons}>
            <button className={styles.watch}>watch</button>
            <PlusIcon className={styles.plus}/>
        </div>


      </div>
    
  )
}

