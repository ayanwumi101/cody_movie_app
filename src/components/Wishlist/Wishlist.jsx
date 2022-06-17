import React from 'react'
import styles from './styles.module.css'
import {HeartFilledIcon} from '@radix-ui/react-icons'

const Wishlist = () => {
  return (
    <div className={styles.bookmarks_container}>
       <div className={styles.heading}>
          <HeartFilledIcon className={ styles.download_icon } />
          <h1>Wishlist</h1>  
       </div>

       <div className="bookmarks">
          <div>
            <p>No items in the wishlist, Your liked videos will appear here.</p>
          </div>
       </div>
    </div>
  )
}

export default Wishlist