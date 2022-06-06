import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './styles.module.css'
import avatar from './image-avatar.png'
import image from './1.jpg'
import {EyeOpenIcon} from '@radix-ui/react-icons'



const Videos = () => {
  const videos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]  
  return (
      <div className={styles.videos_container}>
          
          <Navbar />

          <div className={styles.videos}>
              {videos.map((video, index) => {
                  return (
                    <div className={styles.video} key={index}>
                        <div className={styles.video_img}>
                            <img src={image} alt="movie-image" className={styles.video_image} />
                            <span className={styles.duration}>24:30</span>
                        </div>
                        
                        <div className={styles.details}>
                                <div className={styles.avatar}>
                                    <img src={avatar} alt="user-avatar" className={styles.avatar_img} />
                                </div>

                                <div className={styles.title}>
                                    <h4>Snake in the eagle's Shadow</h4>
                                    <div className={styles.detail}>
                                        <span className={styles.views}>
                                            <EyeOpenIcon/>
                                        <small>12k views</small>
                                        </span>
                                        <small className={styles.date}>14days ago</small>
                                    </div>
                                </div>
                        </div>


                    </div>
                  )
              })}
          </div>
      </div>
  )
}

export default Videos