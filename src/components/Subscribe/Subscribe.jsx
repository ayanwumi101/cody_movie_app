import React from 'react'
import styles from './styles.module.css'
import {EnvelopeClosedIcon, PaperPlaneIcon, ClipboardIcon} from '@radix-ui/react-icons'
import Footer from '../Footer/Footer'


const Subscribe = () => {
  return (
    <div className={styles.subscribe_container}>
          <div className={styles.heading}>
            <ClipboardIcon className={styles.clipboard} />
            <h2>Subscribe to our weekly newsletter</h2>
          </div>

          <form action="">
              <div className={styles.inputs}>
                <EnvelopeClosedIcon className={styles.envelope} />
                <input type="email" className={styles.input} placeholder='Enter your email address' />
              </div>

              <div className={styles.submit}>
                <input type="submit" className={styles.submit_btn} value='Subscribe' />
                <PaperPlaneIcon className={styles.plane} />
              </div>
          </form>
    </div>
  )
}

export default Subscribe