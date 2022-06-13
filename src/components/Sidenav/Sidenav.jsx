import React, {useState} from 'react'
import { DownloadIcon, GearIcon, VideoIcon, DashboardIcon, EnterIcon, BookmarkIcon, PersonIcon, HeartIcon, PlayIcon, TwitterLogoIcon, InstagramLogoIcon, TextAlignLeftIcon, Cross2Icon } from '@radix-ui/react-icons'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'






const Sidenav = () => {

    const location = useLocation();
    
    const [showNav, setShowNav] = useState(false);

    const showSideNav = () => {
        setShowNav(true)
    }
    return (
        <div>
            {location.pathname !== '/login' && (
                <div className={styles.sidenav}>
                    <div className={styles.brand}>
                        <h1>Netflix</h1>
                    </div>

                    <div className={styles.subheading}>
                        <p>Menu</p>
                    </div>

                    <nav className={styles.navigation}>
                    
                        <ul className={styles.lists}>
                            <Link to='/dashboard'>
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

                            <Link to='/login'>
                                <li>
                                    <EnterIcon className={styles.icon} />
                                    <span>Logout</span>
                                </li>
                            </Link>

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
            )}
               
                <div className={styles.burger_container} onClick={showSideNav}>
                    <TextAlignLeftIcon className={styles.hamburger} />
                </div>
            
            
                {showNav ? <SidenavOverlay setShowNav={setShowNav} /> : null}
            </div>
  )
}

export default Sidenav





export const SidenavOverlay = ({setShowNav}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.sidenav_container} onClick={() => setShowNav(false)}>
                <button className={styles.sidenav_btn} onClick={() => setShowNav(false)}><Cross2Icon className={styles.close_icon} /></button>
                    <div className={styles.brand}>
                        <h1>Netflix</h1>
                    </div>

                    <div className={styles.subheading}>
                        <p>Menu</p>
                    </div>

                    <nav className={styles.navigation}>
                    
                        <ul className={styles.lists}>
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

                            <Link to='/login'>
                                <li>
                                    <EnterIcon className={styles.icon} />
                                    <span>Logout</span>
                                </li>
                            </Link>

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
        </div>
    )
}