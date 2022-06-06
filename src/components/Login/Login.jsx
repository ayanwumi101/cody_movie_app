import React from 'react'
import { EnterIcon, PersonIcon, LockClosedIcon, AvatarIcon } from '@radix-ui/react-icons'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.heading}>
          <AvatarIcon className={styles.big} />
        <h2>User Login</h2>
      </div>

      <form action="">
        <div className={styles.inputs}>
          <input type="text" placeholder='Enter your username or email' id='username' name='username' className={styles.username} required />
          <PersonIcon className={styles.icon} />
        </div>

        <div className={styles.inputs}>
          <input type="password" placeholder='Enter your password' id='password' name='password' className={styles.password} />
          <LockClosedIcon className={styles.icon} required />
        </div>

        <Link to='/dashboard'>
            <div className={styles.last_input}>
              <input type="submit" placeholder='Enter your password' id='submit' value='Login' className={styles.submit} />
              <EnterIcon className={styles.login_icon} />
            </div>
        </Link>

        <p>Don't have an account yet? <a href="#">sign up</a></p>

      </form>
    </div>
  )
}

export default Login