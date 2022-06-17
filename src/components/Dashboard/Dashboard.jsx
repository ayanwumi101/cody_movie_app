import React from 'react'
import Poster from '../Posters/Poster'
import Notifications from '../Notifications/Notifications'
import styles from './styles.module.css'



const Dashboard = () => {
  return (
    
      <div className={styles.dashboard}>
          <Poster />
          <Notifications />
      </div>
    
  )
}

export default Dashboard