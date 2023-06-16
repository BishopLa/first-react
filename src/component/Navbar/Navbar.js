import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.navbar}>
        <Link to ='/'>
        <li>Home</li>
        </Link>
        <Link to ='/contact'>
        <li>Contact</li>
        </Link>
        <Link to ='/services'>
        <li>Services</li>
        </Link>
      </ul> 
      </div>
  )
}

export default Navbar