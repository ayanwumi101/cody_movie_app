import React from 'react'
import Movies from '../Movies/Movies'
import Notifications from '../Notifications/Notifications'
import styles from './styles.module.css'



const Dashboard = () => {
  return (
    
      <div className={styles.dashboard}>
          <Movies />
          <Notifications />
      </div>
    
  )
}

export default Dashboard