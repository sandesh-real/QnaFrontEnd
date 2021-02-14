import React from 'react';
import classes from './Logo.module.css';
import {NavLink} from 'react-router-dom';
const Logo =(props)=>{
    return(
        <div className={classes.Logo}>
            <NavLink to="/">QnA</NavLink>
        </div>
    )
}
export default Logo;