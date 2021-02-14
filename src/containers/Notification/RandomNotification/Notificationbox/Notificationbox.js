import React from 'react';
import classes from './Notificationbox.module.css';
const Notificationbox =(props)=>{
    return(
        <div className={classes.NotificationBox}>
        <div className={classes.NotificationInfo}>
       
        <h2>{props.message}</h2>
        <p>5 hr ago</p>
        </div>
        <div  onClick={props.clicked} className={classes.Clear}>
        <p>clear</p>
        
        </div>
    </div>
    )
}
export default Notificationbox;