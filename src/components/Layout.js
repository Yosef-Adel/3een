import React from 'react'
import classes from './style/layout.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={classes.layout}>
       <div className={classes.textBox}>
                <Link to='/products' className={classes.btn} >
                <p>shop now </p>
                <ArrowRightAltIcon fontSize="large"  className={classes.arrow}/>
                </Link> 
       </div>
        
    </div>
  )
}

export default Layout