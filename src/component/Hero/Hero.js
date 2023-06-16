import React from 'react'
import classes from './Hero.module.css'
import Image from '../../assets/acer.jpg'


const Hero = () => {
  return (
    <div className={classes.container}>
        <img src= {Image} alt='Technology'/>
    </div>
  )
}

export default Hero