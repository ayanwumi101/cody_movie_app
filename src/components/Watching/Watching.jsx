import React from 'react'
import styles from './styles.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'


const Watching = ({watching}) => {

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
              {watching.map((watch,index) => {
                  return (
                      <Link to={`/video/${watch._id}`}>
                            <div className={styles.cards} key={index}>
                                <div className={styles.image_container}>
                                        <img src={watch.image} alt="card image" className={styles.card_image} />
                                </div>

                                <div className={styles.progress}>
                                    <div className={styles.progress_line}></div>
                                </div>

                                    <div className={styles.content}>
                                        <h4>{watch.title}</h4>
                                    </div>
                            </div>
                      </Link>
                 )
              })}
          </div>
      
    </div>
  )
}

export default Watching