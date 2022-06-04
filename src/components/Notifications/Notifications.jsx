import React from 'react'
import styles from './styles.module.css'
import { MagnifyingGlassIcon, HeartFilledIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import image from './boy.png'

const Notifications = () => {
  const featured = [1,2]
  return (
    <div className={styles.notificationContainer}>

      <div className={styles.inputs}>
              <input type="text" placeholder='Search....' className={styles.input} />
              <MagnifyingGlassIcon className={ styles.icon }/>
      </div>


      <h4>Popular movies</h4>
      <div className={styles.movie}>
        {featured.map((single) => {
          return (
            <div className={styles.single}>
                <div className={styles.image}>
                    <img src={image} alt="" className={ styles.movie_img}/>
                </div>
              
                <div className="details">
                    <h5>John Wick</h5>
                    <small>Lorem ipsum sit consectetur.</small>
                    
                    <div className={styles.likes_container}>
                          <div className={styles.likes}>
                            <HeartFilledIcon />
                            <small>45 likes</small>         
                          </div>
                          <div className={styles.likes}>
                              <EyeOpenIcon />
                              <small>2,574 views</small>
                          </div>
                    </div>

                
                </div>
            </div>
          )
        })}
        
        <button className={styles.more}><strong>See More</strong></button>
      </div>


      <h4>Favourites</h4>
      <div className={styles.movie}>
        {featured.map((single) => {
          return (
            <div className={styles.single}>
                <div className={styles.image}>
                    <img src={image} alt="" className={ styles.movie_img}/>
                </div>
              
                <div className="details">
                    <h5>John Wick</h5>
                    <small>Lorem ipsum sit consectetur.</small>
                    
                    <div className={styles.likes_container}>
                          <div className={styles.likes}>
                            <HeartFilledIcon />
                            <small>45 likes</small>         
                          </div>
                          <div className={styles.likes}>
                              <EyeOpenIcon />
                              <small>2,574 views</small>
                          </div>
                    </div>

                
                </div>
            </div>
          )
        })}
        
        <button className={styles.more}><strong>See More</strong></button>
      </div>

    </div>
  )
}

export default Notifications