import React, { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import classes from './style/DetailsImg.module.css'

const DetailsImg = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <ArrowBackIosNewIcon fontSize='large' className={classes.leftarrow} onClick={prevSlide} />
      <ArrowForwardIosIcon fontSize='large' className={classes.rightarrow} onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slideactive' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='Clothes' className={classes.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default DetailsImg;