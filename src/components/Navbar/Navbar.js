import React from 'react'
import classes from './Navbar.module.css'
import{Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const navbar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innercontainer}>
            <div className={classes.logo}>
                <Link to='/'>
                    <img src= {Logo} alt ="Logo" />
                </Link>
            </div>
            <ul className={classes.navMenu}>
                <Link to ='./' className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <li>Home</li>
                </Link>
                <Link to ='./services' className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <li>Services</li>
                </Link>
                <Link to ='./about' className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <li>About Us</li>
                </Link>
                <Link to ='./contact' className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <li>Contact Us</li>
                </Link>
            </ul>

        </div>

    </div>
  )
}

export default navbar