import React from 'react'
import classes from './style/cardsrow.module.css'
import Card from './Card'
const CardsRow = (props) => {
  return (
    <div className={classes.cardContainer} >
      <h1> {props.title}</h1>
      <div className={classes.cardsRow}>
        {
          props.products.map((p)=> <Card product= {p} key= {p.id}/>)
        }

      </div>
        

    </div>
  )
}

export default CardsRow