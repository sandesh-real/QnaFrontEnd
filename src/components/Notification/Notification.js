import React from 'react';
import classes from './Notification.module.css';
const Notification =(props)=>{
    return(
        <div className={classes.Notification}>
            <div className={classes.InsideContainer}>
                <div className={classes.NotificationButtons}>
                    <button className={classes.NotificationCount}><i className="fas fa-bell"></i></button>
                    <button className={classes.FriendRequestCount}><i className="fas fa-users"></i></button>
                    <button className={classes.AnswerRequestCount}><i className="fas fa-book-open"></i></button>
                </div>
                <div className={classes.NotificationList}>
                    <div className={classes.NotificationBox}>
                        <div className={classes.NotificationInfo}>
                        <h2>Your post question "What is calclus?" has been answered by 3 people</h2>
                        <p>5 hr ago</p>
                        </div>
                        <div  onClick={props.clicked} className={classes.Clear}>
                        <p>clear</p>
                        
                        </div>
                    </div>
                   
                </div>
                
                </div>
        </div>
    )

}
export default Notification;