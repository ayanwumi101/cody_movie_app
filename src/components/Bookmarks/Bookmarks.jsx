import React from 'react'
import styles from './styles.module.css'
import { BookmarkIcon } from '@radix-ui/react-icons'



const Bookmarks = () => {
  return (
    <div className={styles.bookmarks_container}>
       <div className={styles.heading}>
          <BookmarkIcon className={ styles.download_icon } />
          <h1>Bookmarks</h1>  
       </div>

       <div className="bookmarks">
          <div>
            <p>No boomarked videos, Your bookmarks will appear here.</p>
          </div>
       </div>
    </div>
  )
}

export default Bookmarks