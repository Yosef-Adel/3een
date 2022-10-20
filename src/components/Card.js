import React from 'react'
import classes from './style/card.module.css' 
import { useHistory } from 'react-router-dom';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Card = ({product}) => {
  const history = useHistory();
  const clickHandler = () => {
    if (product.quantity>0 )
    {
      history.push(`/productdetails/${product.id}`);
    }
  }
  return (
    <div className={classes.card} onClick={clickHandler}>
       <div className={`${(product.quantity===0 || product.quantity===2)? classes.imgContainerSold: classes.imgContainer}`}>
        { product.quantity===0 &&
        <div className={classes.soldOut}>
          <p> Coming Soon </p>
        </div>
        }
        { product.quantity===2 &&
        <div className={classes.sold}>
          <WatchLaterIcon/>
          <p> Out of stock! </p>
        </div>
        }
        <img src={product.img} alt = 'product'/>
       </div>
       <div className={classes.cardInfo}>
            <p>{product.name}</p>
            <span>LE {product.price}.00</span>
       </div>
    </div>
  )
}

export default Card
