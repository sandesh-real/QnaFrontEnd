import React from 'react';
import classes from './Tag.module.css';
const Tag =(props)=>{
    return(
        <div className={classes.Tags}>
             <button href="random" className={classes.firstTag}>Java</button>
             <button href="random" className={classes.secondTag}>Programmin</button>
        </div> 
    )
}
export default Tag;