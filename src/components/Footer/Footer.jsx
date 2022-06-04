import React from 'react'
import { TwitterLogoIcon, InstagramLogoIcon, VideoIcon, EnvelopeClosedIcon, RocketIcon, Link2Icon, IdCardIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer>
          <div className={styles.brand}>

              <div className={styles.line}></div>
              <h2>Skudan Pictures</h2>
            

                <div className={styles.links_container}>
                    <div className="links">
                        <div className={styles.heading}>
                            <Link2Icon />
                            <p>Quick Links</p>
                        </div>
                        <ul>
                          <Link to='/about'>
                                <li>
                                    <IdCardIcon />
                                    <span>About Us</span>
                                </li>
                            </Link>
                            <li>
                                <RocketIcon />
                                <span>Contact Us</span>
                            </li>
                            <li>
                                <EnvelopeClosedIcon />
                                <span>Subscribe</span>
                            </li>
                        </ul>
                    </div>



                    <div className="links">
                        <div className={styles.heading}>
                            <ExternalLinkIcon />
                            <p>Follow Us</p>
                        </div>
                        <ul>
                            <li>
                                <TwitterLogoIcon/>
                                <a href="https://www.twitter.com/SkudanL" target='_blank'>Twitter</a>
                            </li>
                            <li>
                                <InstagramLogoIcon/>
                                <a href="htts://www.instagram.com/skudanpictureslondon/" target='_blank'>Instagram</a>
                            </li>
                            <li>
                                <VideoIcon/>
                                <a href="https://www.youtube.com/channel/UCPsboz8SLxmXLlsst75k48w/videos" target='_blank'>Youtube</a>
                            </li>
                            
                        </ul>
                    </div>


                  <div className="links">
                        <div className={styles.heading}>
                            <ExternalLinkIcon />
                            <p>Follow Us</p>
                        </div>
                        <ul>
                            <li>
                                <TwitterLogoIcon/>
                                <a href="https://www.twitter.com/SkudanL" target='_blank'>Twitter</a>
                            </li>
                            <li>
                                <InstagramLogoIcon/>
                                <a href="htts://www.instagram.com/skudanpictureslondon/" target='_blank'>Instagram</a>
                            </li>
                            <li>
                                <VideoIcon/>
                                <a href="https://www.youtube.com/channel/UCPsboz8SLxmXLlsst75k48w/videos" target='_blank'>Youtube</a>
                            </li>
                            
                        </ul>
                    </div>

                </div>

              <span>Copywright &copy; Skudan pictures { date }</span>
        </div>
    </footer>
  )
}

export default Footer