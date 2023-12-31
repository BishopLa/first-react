import React from 'react'
import classes from './Hero.module.css'
import OtherHeroProps from '../OtherHeroProps/OtherHeroProps'


const Hero = () => {
  return (
    <div className={classes.container}>
        <OtherHeroProps
         headA = "Build and Grow Your Business with Expert Guidance"
         btnText = "Get Started"
         paragraph ="At MayFrame group,
          we specialized in driving transformative 
          growth and success that assist 
          businesses in various domains."
        />
    </div>
  )
}

export default Hero