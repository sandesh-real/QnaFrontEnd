
import React from 'react';
import classes from './UserProfile.module.css';
import randomPic from '../../Assets/images/noprofile.png';
import Button from '../../components/UI/Button/Button';
import {NavLink} from 'react-router-dom';
const UserProfile =(props)=>{
    return(
        <div className={classes.UserProfile}>
        <div className={classes.Top}>
            <div className={classes.LogoContainer}>
                <h2>QnA</h2>
            </div>
        </div>
        <div className={classes.Bottom}>
            <h1 className={classes.Title}>Choose profile picture</h1>
            <div className={classes.profileContainer}>
                <div className={classes.profile}>
                {props.imageBuffer?<img src={`http://localhost:3000/user/profile/${props.token}`}  alt={randomPic}/>:
                    <img src={randomPic} alt={randomPic}/>}
                </div>
                <div className={classes.ProfileChangeBtn}>
                    <form className={classes.userForm}   onSubmit={props.profilePicHandler}>
                    
                    <input type="file" name='profile' className={classes.inputFile}  onChange={props.inputChangeHandler}/>
                    
                         
                      {props.isGotImage?<Button btnType='Success'>Change Profile Picture</Button>:null}  
                    </form>
                </div>
               
            </div>
            <div className={classes.ProfileActionBtn}>
                {props.isImageChanged?<NavLink to='/' className={classes.DoneButton} onClick={props.allsetHandler}>Done</NavLink>:null}
               
            </div>
        </div>
        </div>
        
    )
}
export default UserProfile;