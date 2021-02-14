import classes from './CancelBtn.module.css';
import React from 'react';

const CancelBtn=(props)=>{
    return(
        <div className={classes.CancelBtn}>
                <button onClick={props.Clicked}>Cancel</button>
        </div>
      
    )
}
export default CancelBtn;