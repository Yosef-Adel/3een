import React, { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { SliderData } from './SliderData.js';
import classes from './style/SliderR.module.css'

const SliderR = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <ArrowBackIosNewIcon sx= {{ fontSize:'50px'}} className={classes.leftarrow} onClick={prevSlide} />
      <ArrowForwardIosIcon sx= {{ fontSize:'50px'}} className={classes.rightarrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slideactive' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className={classes.txt}>
                <h1> {slide.msg} </h1>
                <p> {slide.name} </p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderR;