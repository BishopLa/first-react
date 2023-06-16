import React from 'react'
// import './Classwork.css'
import classes from './Classwork.module.css'
import Logo from '../../assets/mountain.png'

const Classwork = () => {
  return (
    <div className={classes.container}>
     <p>Classwork</p>  
     <img src= {Logo} alt='logo'/>
      </div>
  )
}

export default Classwork