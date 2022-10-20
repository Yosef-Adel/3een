import React from 'react'
import classes from './style/Review.module.css'
import Slider from './Slider'
import Rev1 from '../img/Rev1.jpg'
import Rev2 from '../img/Rev2.jpg'
import Rev3 from '../img/Rev3.jpg'
import SliderR from './SliderR'
const Review = () => {
  return (
    <div className={classes.vContainer}>
        <h1 >
        Reviews
        </h1>

        <div className={classes.videoContainer}>
            <SliderR />
        </div>
    </div>
  )
}

export default Review