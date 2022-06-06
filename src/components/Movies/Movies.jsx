import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './styles.module.css'
import image from './1.jpg'
import {PlusIcon, ChevronRightIcon} from '@radix-ui/react-icons'
import MovieCard from '../MovieCards/MovieCard'
import axios from 'axios'
import Watching from '../Watching/Watching'
import Footer from '../Footer/Footer'



const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=e9dcafea'



const Movies = () => {
  const [movies, setMovies] = useState({})

  // const fetchData = async() => {
  //   try {
  //     const response = await axios.get(url)
  //     const data = response.data;
  //     setMovies(data)
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className={styles.movie}>
        <Navbar />
        <Featured movies={movies} />
        <MovieCard movies={movies} />
        <Watching />
        <Footer />
    </div>
  )
}

export default Movies



export const Featured = ({ movies }) => {
  return (
    
      <div className={styles.featured_movie}>

        <div className={styles.background}>
            <img src={image} alt="" className={styles.background_image} />
            <ChevronRightIcon className={styles.next}/>
        </div>

        <div className={styles.title}>
            <h2>Legend Of The Seeker</h2>
            <small>Adventure, Comedy, Action</small>
        </div>
        

        <div className={styles.buttons}>
            <button className={styles.watch}>watch</button>
            <PlusIcon className={styles.plus}/>
        </div>


      </div>
    
  )
}

