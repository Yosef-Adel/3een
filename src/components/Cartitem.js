import React from 'react'
import classes from './style/CartItem.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Cartitem = (props) => {
    let history = useHistory();
const dispatch= useDispatch();
  return (
    <div className= {classes.itemContainer}>
        <div className= {classes.imgContainer} onClick={()=> {history.location.pathname !== `/productdetails/${props.product.id}` && history.push(`productdetails/${props.product.id}`)  ; window.location.reload();}  }>
            <img src={props.product.img} alt = ""/>
        </div>
        <div className= {classes.title} >
            <div>
            <p>{props.product.name}</p>
            </div>
            <div>
            <p><span>{props.product.count}</span> <span><CloseIcon  style={{ fontSize: 15 }}/></span> <span>{props.product.price}</span></p>
            </div>
            <div>
            <p>{props.product.size}</p>
            </div>
        </div>
        <div className= {classes.control}>
            <button onClick={()=> dispatch({type: "remove", id: props.product.id})}><DeleteOutlineIcon style={{ fontSize: 30, color:'red' }}/></button>
        </div>
    </div>
  )
}

export default Cartitem