import React from 'react'
import styles from './styles.module.css'
import Footer from '../Footer/Footer'
import {EnvelopeClosedIcon, HomeIcon, ExternalLinkIcon} from '@radix-ui/react-icons'


const About = () => {
  return (
      <div className={styles.about_container}>
          <div className={styles.heading}>
              <h1>About Skudan Pictures</h1>
          </div>

          <div className={styles.content}>
              <p className={styles.text}>
                  Skudan is a family owned production company committed to delivering original contents theough strong storytelling, authenticity, commitment and passion. The company was originally founded in 2019 in the UK and now registered in Nigeria with its permanent office in Lagos State.
                </p>

                <p className={styles.text}>
                    The co-founder is an incredibly talented writer with an eye for detail. Skudan picture is comitted to furthering the art and craft of the new Nigerian Cinema and in the process creating and developing the overlooked areas of the business.
              </p>
              
              <p className={styles.text}>
                  Producer of the film Apples and Oranges. The company is also in the process of bringing more work to the screen. Stay tuned as the best is yet to come.
              </p>


             <div className={styles.address_container}>
                    <div className={styles.address}>
                        <div className={styles.heading2}>
                            <HomeIcon />
                            <h4>Address</h4>
                        </div>

                        <p>Skudan Production Ltd. Registered in Nigeria. Registered No. 1915224</p>
                        <p>Registered Office: 6A Awkuzu Street, Lekki Phase 1, Lekki,Lagos State,Nigeria.</p>

                    </div>

                    <div className={styles.address}>
                        <div className={styles.heading2}>
                            <EnvelopeClosedIcon />
                            <h4>Email</h4>
                        </div>

                        <div className={styles.email}>
                            <ExternalLinkIcon/>
                            <p>skudanpictures@gmail.com</p>
                        </div>
                    </div>
             </div>

              <Footer  />
          </div>

      </div> 
  )
}

export default About