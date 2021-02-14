import React from 'react';
import classes from './EditedProfile.module.css';
import Btn from '../CancelBtn/CancelBtn';
const EditedProfile=(props)=>{
  
    return(
        
        <div className={classes.EditedProfile}>
        <h2>Edit Profile</h2>
    <div className={classes.ProfileEdit}>
       
        <div className={classes.Email}>
        <div className={classes.LabelAndEdit}>
            <p>Email</p>
            <button onClick={props.clickedEmail}>edit</button>
        </div>
        {props.toShowEmail?   <div className={classes.editField}>
            <div className={classes.PrevEmail}>
                <label>Previous Email</label>
                <input type="email" placeholder="Previous Email"/>
            </div>
            <div className={classes.NewEmail}>
                <label>New Email</label>
                <input type="email" placeholder="New Email"/>
            </div>
            <div className={classes.EmailButton}>
            <button>save</button>
            </div>
        </div>:null}
     
        </div>
        <div className={classes.Password}>
        <div className={classes.LabelAndPassword}>
            <p>Password</p>
            <button  onClick={props.clickedPassword}>edit</button>
        </div>
        {props.toShowPassword?  <div className={classes.editField}>
            <div className={classes.PrvPassword}>
                <label>Previous Password</label>
                <input type="password" placeholder="Previous Password"/>
            </div>
            <div className={classes.NewPassword}>
                <label>New Email</label>
                <input type="password" placeholder="New Password"/>
            </div>
            <div className={classes.PasswordButton}>
            <button>save</button>
            </div>
        </div>:null}
      
        </div>
      
    </div>
    <div className={classes.CancelButton}>
        <Btn Clicked={props.profileEditCancled}/>
    </div>
</div>

    )
}

export default EditedProfile;
