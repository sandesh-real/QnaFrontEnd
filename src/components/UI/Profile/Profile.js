import React from 'react';
import classes from './Profile.module.css';
import FriendRequest from '../friendRequest/friendRequest';

const Profile=(props)=>{
    
    return(
        <div className={classes.Profile}>
        <div className={classes.ProfileImage}>
        {props.avatar? <img src={props.avatar} alt="profile-img" />:<img src={`http://localhost:3000/user/profile/${props.token}`} alt="profile-img" />}
            
        </div>
        <div className={classes.ProfileInfo}>
            <p className={classes.profileName}>{props.username}</p>
            <p className={classes.addedTime}>{props.children}</p>
        </div>
        {props.friendRequestshow? <FriendRequest username={props.username} btnType={props.btnType}  otherUserId={props.otherUserId} />:null}
       
    </div>
    )
}
export default Profile;