import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon, PlusIcon, StarFilledIcon} from '@radix-ui/react-icons'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


const MovieCard = ({card}) => {

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
              {card.map((cards, index) => {
                  return (
                      <Link to={`/video/${cards._id}`}>
                            <div className={styles.cards} key={index}>
                                    <div className={styles.image_container}>
                                        <img src={cards.image} alt="card image" className={styles.card_image} />
                                    </div>
                                    <div className={styles.content}>
                                        <h4>{cards.titleOriginal}</h4>
                                        <small>{cards.release}</small>
                                        <div className="stars">
                                        <StarFilledIcon />
                                        <small>{ cards.rating }</small>
                                        </div>
                                    </div>
                                    <PlusIcon className={styles.plus}/>
                            </div>
                      </Link>
                 )
              })}
          </div>
      </div>
  )
}

export default MovieCard
