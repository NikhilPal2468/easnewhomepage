import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.jpg'
import logo from '../../assets/eas_logo_final.png'
import './nav.css'
const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarContainerLogo">
                    <Link to='/' ><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbarContainerLinks">
                    <li className="navbarLink"><Link to='/'>HOME</Link></li>
                    <li className="navbarLink"><Link to='/about'>ABOUT</Link></li>
                    <li className="navbarLink"><Link to='/services'>SERVICES</Link></li>
                    {/* <li className="navbarLink"><Link to="/blog">BLOG</Link></li> */}
                    <li className="navbarLink"><Link to="contact">CONTACT US</Link></li>
                    <li className="navbarLink"><a href={process.env.REACT_APP_LOGIN_LINK}>MEMBER LOGIN</a></li>
                    <li className="navbarLink border"><a href="https://calendly.com/energyanalyticssolutions/book-a-time-with-ash" target="_blank" rel="noreferrer" >BOOK A DEMO</a></li>
                </div>
            </div>
        </div>
    )
}

export default Nav