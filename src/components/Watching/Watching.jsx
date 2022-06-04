import React from 'react'
import styles from './styles.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import image from './1.jpg'

const Watching = () => {

    const cards = [1,2,3]

  return (
    <div className={styles.movie_card_container}>
          <div className={styles.section_heading}>
              <h3>Continue Watching</h3>

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

                          <div className={styles.progress}>
                              <div className={styles.progress_line}></div>
                          </div>

                            <div className={styles.content}>
                                <h4>Jackie Chan</h4>
                            </div>
                      </div>
                 )
              })}
          </div>
      
    </div>
  )
}

export default Watching