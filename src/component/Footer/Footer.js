import React from 'react'
import classes from "./Footer.module.css"
import Fone from "../../assets/mobile-black.png"

const Footer = () => {
  return (
    <div className={classes.container}>
        <h1>FOOTER COMPONENT ON DISPLAY</h1>
        <p>We equip, engage and develop exciting individuals seeking innovative ideas and collaborations</p>
        <img src={Fone} alt='Fone Logo'/>
    </div>
  )
}

export default Footer