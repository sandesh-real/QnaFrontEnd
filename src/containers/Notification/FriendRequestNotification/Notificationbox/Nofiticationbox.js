import React from 'react';
import classes from './Notificationbox.module.css';
import Profile from '../../../../components/UI/Profile/Profile';
import FriendRequest from '../../../../components/UI/friendRequest/friendRequest';
const Notificationbox=(props)=>{
    return(
        <div className={classes.NotificationBox}>
        <div className={classes.NotiUpper}>
            <div className={classes.NotificationInfo}>
            <Profile avatar={props.avatar} username={props.username}>5 hr ago</Profile>
            </div>
            <div className={classes.NotiMessage}>
            <p>{props.message}</p>
        </div>
        </div>
            <div className={classes.FriendRequestLogo}>
                <FriendRequest otherUserId={props.otherUserId} btnType="larger"/>
            </div>
        
            <div  onClick={props.clicked} className={classes.Clear}>
            <p>clear</p>
            
            </div>
           
         
        </div>
    )
}

export default Notificationbox;