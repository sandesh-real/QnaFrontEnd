import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import classes from './Notification.module.css';
import  RandomNotification from './RandomNotification/RandomNotifiction';
import  FriendRequestNotification from './FriendRequestNotification/FriendRequestNotification';


const Notification =(props)=>{
   
    // friendReqNoti
    let classesFriendNoti=[classes.FriendRequestCount];
    let classesRandomNoti=[classes.NotificationCount];

    if(props.friendreqnoti)
    {
        classesFriendNoti=[classes.FriendRequestCount,classes.notiActive];
    }
    if(!props.randomReqNoti)
    {
        classesRandomNoti=[classes.NotificationCount,classes.notiActive]
    }
    return(
        <div className={classes.Notification}>
            <div className={classes.InsideContainer}>
                <div className={classes.NotificationButtons}>
                    <NavLink to='/notifications/randomNotification' className={classesRandomNoti.join(' ')}><i className="fas fa-bell"></i></NavLink>
                    <NavLink to='/notifications/friendRequestNotification' className={classesFriendNoti.join(' ')}><i className="fas fa-users"></i></NavLink>
                    <NavLink to="/notifications/answerRequest" className={classes.AnswerRequestCount}><i className="fas fa-book-open"></i></NavLink>
                </div>
             
                <Switch>
                    <Route path={`${props.match.url}/randomNotification`} render={()=><RandomNotification  friendReqNoti={props.friendReqNoti} />}/>
                    <Route path={`${props.match.url}/friendRequestNotification`} render={()=><FriendRequestNotification {...props}  friendreqnoti={props.friendreqnoti} />}/>
                </Switch>
                
                </div>
        </div>
    )

}

export default (Notification);