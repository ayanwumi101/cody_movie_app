import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon, PlusIcon, StarFilledIcon} from '@radix-ui/react-icons'
import styles from './styles.module.css'
import image from './boy.png'


const MovieCard = () => {

    const cards = [1, 2, 3];

  return (
      <div className={styles.movie_card_container}>
          <div className={styles.section_heading}>
              <h3>Trending</h3>

              <div className={styles.icons}>
                  <ChevronLeftIcon className={styles.icon} />
                  <ChevronRightIcon className={styles.icon} />
              </div>
          </div>    

          <div className={styles.cards_container}>
              {cards.map((card) => {
                  return (
                      <div className={styles.cards}>
                            <div className={styles.image_container}>
                                <img src={image} alt="card image" className={styles.card_image} />
                            </div>
                            <div className={styles.content}>
                                <h4>Jackie Chan</h4>
                                <small>12+ movies</small>
                                <div className="stars">
                                  <StarFilledIcon />
                                  <small>4.5</small>
                                </div>
                            </div>
                            <PlusIcon className={styles.plus}/>
                      </div>
                 )
              })}
          </div>
      </div>
  )
}

export default MovieCard
