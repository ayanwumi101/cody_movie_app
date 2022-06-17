import React from 'react'
import styles from './styles.module.css'
import { DownloadIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'


const Downloads = () => {
  return (
    <div className={styles.downloads_container}>
        <div className={styles.heading}>
          <DownloadIcon className={ styles.download_icon } />
          <h1>Downloads</h1>  
        </div>

        <div className={styles.downloads}>
          <p>No downloaded videos</p>
          <Link to='/videos'><button>Browse movies</button></Link>
        </div>
    </div>
  )
}

export default Downloads