import React, {useState} from 'react'
import { DownloadIcon, GearIcon, VideoIcon, DashboardIcon, EnterIcon, BookmarkIcon, PersonIcon, HeartIcon, PlayIcon, TwitterLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'





const Sidenav = () => {
    // const [navPosition, setNavPosition] = useState(-1)
    // const menuLinks = ['dashboard', 'videos', 'bookmarks', 'wishlist', 'downloads'];

    // const handleClick = (index) => {
    //     setNavPosition(index);
    // }
  return (
      <div className={styles.sidenav}>
          <div className={styles.brand}>
              <h1>Netflix</h1>
          </div>

          <div className={styles.subheading}>
              <p>Menu</p>
          </div>

          <nav className={styles.navigation}>
              
              <ul className={styles.lists}>

                  {/* {menuLinks.map((item, index) => <Link 
                        onClick={() => handleClick(index) } 
                        key={index} 
                        className={index===navPosition ? 'active':null} to={'/'+item}><li><span>{item}</span></li></Link>
                    )} */}
                  <Link to='/'>
                        <li>
                            <DashboardIcon className={styles.icon} />
                            <span>Dashboard</span>
                        </li>
                  </Link>

                  <Link to='/videos'>
                        <li>
                            <VideoIcon className={styles.icon} />
                            <span>Videos</span>
                        </li>
                  </Link>

                  <li>
                      <BookmarkIcon className={styles.icon} />
                      <span>Bookmarks</span>
                  </li>

                  <li>
                      <HeartIcon className={styles.icon} />
                      <span>Wishlist</span>
                  </li>

                  <li>
                      <DownloadIcon className={styles.icon} />
                      <span>Downloads</span>
                  </li>

              </ul>
          </nav>


           <div className={styles.subheading}>
              <p>Social</p>
          </div>
          
          <nav className={styles.navigation}>
              
              <ul className={styles.lists}>
                  <li>
                      <PlayIcon className={styles.icon} />
                      <span>Movies</span>
                  </li>
                  
                  <li>
                      <PersonIcon className={styles.icon} />
                      <span>User</span>
                  </li>

              </ul>
          </nav>



         <div className={styles.subheading}>
              <p>General</p>
          </div>
          
          <nav className={styles.navigation}>
              
              <ul className={styles.lists}>
                  <li>
                      <GearIcon className={styles.icon} />
                      <span>Settings</span>
                  </li>

                  <li>
                      <EnterIcon className={styles.icon} />
                      <span>Logout</span>
                  </li>

              </ul>
          </nav>

          <div className={styles.line}></div>

          <div className={styles.social_links}>
              <a href="https://www.twitter.com/SkudanL" target='_blank'>
                  <TwitterLogoIcon /><br />
                  <small>Twitter</small>
              </a>
              <a href="htts://www.instagram.com/skudanpictureslondon/" target='_blank'>
                  <InstagramLogoIcon /><br />
                  <small>Instagram</small>
              </a>
              <a href="https://www.youtube.com/channel/UCPsboz8SLxmXLlsst75k48w/videos" target='_blank'>
                  <VideoIcon /><br />
                  <small>Youtube</small>
              </a>
          </div>
    </div>
  )
}

export default Sidenav