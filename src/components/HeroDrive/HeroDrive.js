import React from 'react'
import classes from './HeroDrive.module.css'

const HeroDrive = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
    </div>
        <div className={classes.cardContainer}>
        <div className={classes.cardWrap}> 
            <div className={classes.card}>
                    <h1>15+</h1>
                    <p>Over 15 years of experience</p>
             </div>
             <div className={classes.line}></div>
            <div className={classes.card}>
                    <h1>90%</h1>
                    <p>High passing rate</p>
             </div>
             <div className={classes.line}></div>
            <div className={classes.card}>
                    <h1>200</h1>
                    <p>Over 200 students taught</p>
             </div>
        </div>
        </div>
    </div>
  )
}

export default HeroDrive