import React from 'react'
import styles from './styles.module.css'
import avatar from './image-avatar.png'
import { BellIcon, ChatBubbleIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'

const Navbar = () => {
  return (
      <div className={styles.navbar}>

          <div className={styles.inputs}>
              <input type="text" placeholder='Search....' className={styles.input} />
              <MagnifyingGlassIcon className={ styles.icon }/>
          </div>

          <div className={styles.info}>         
              <img src={avatar} alt="user avatar" className={ styles.avatar } />
          </div>

    </div>
  )
}

export default Navbar
