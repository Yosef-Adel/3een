import React from 'react'
import classes from './style/Info.module.css'

const Info = () => {
  return (
   <div className={classes.inf}>
    <p>More Details</p>
     <div className={classes.infContainer}>
        <div className={classes.txtContainer}>
            <h4>Washing Information</h4>
            <ul>
                <li></li>
                <li>
                    Do NOT bleach
                </li>
                <li>
                    Do NOT iron on the print
                </li>
                <li>
                    Wash Inside out
                </li>
                <li>
                    Do NOT tumble dry
                </li>
                <li>
                    Wash BELOW 30°C
                </li>
            </ul>
        </div>
        <div className={classes.txtContainer}>
            <h4>Policy</h4>
            <ul>
                <li></li>
                <li>
                    No returns after the courier leaves
                </li>
                <li>
                    Delivery fees are not refundable
                </li>
                <li>
                    Size exchanges are allowed in the case that the items are in the same condition you recieved
                </li>
            </ul>
        </div>
      </div>
   </div>
  )
}

export default Info