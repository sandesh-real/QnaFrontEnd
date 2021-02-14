import React,{useState} from 'react';
import classes from './EditedProfile.module.css';
import Btn from '../CancelBtn/CancelBtn';
import * as actions from '../../../../store/actions/index';
import {connect} from 'react-redux';
const EditedProfile=(props)=>{
   
    const [editNeweusername,setEditNewusername]=useState()
    const [editPasswordOld,setEditPasswordOld]=useState();
    const [editPasswordNew,setEditPasswordNew]=useState();
    const newusenameChanger=(event)=>{
        
        setEditNewusername(event.target.value);
    }
    const editUsernameHandler=()=>{
        props.onSetEmail(props.token,editNeweusername);
    }

    const OldPasswordChanger=(event)=>{
    
        setEditPasswordOld(event.target.value);
    }

    const editPasswordHandler=()=>{
        props.onSetPassword(props.token,editPasswordOld,editPasswordNew)
    }


    const NewPasswordChanger=(event)=>{
        setEditPasswordNew(event.target.value)
    }

    return(
        
        <div className={classes.EditedProfile}>
        <h2>Edit Profile</h2>
    <div className={classes.ProfileEdit}>
       
        <div className={classes.Email}>
        <div className={classes.LabelAndEdit}>
            <p>New Username</p>
            <button onClick={props.clickedEmail}>edit</button>
        </div>
        {props.toShowEmail?   <div className={classes.editField}>
         
            <div className={classes.NewEmail}>
                <label>New Username</label>
                <input type="Username" placeholder="New Username" value={editNeweusername} onChange={newusenameChanger}/>
            </div>
            <div className={classes.EmailButton}>
            <button onClick={editUsernameHandler} >save</button>
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
                <input type="password" placeholder="Previous Password" value={editPasswordOld} onChange={OldPasswordChanger}/>
            </div>
            <div className={classes.NewPassword}>
                <label>New Password</label>
                <input type="password" placeholder="New Password"  value={editPasswordNew} onChange={NewPasswordChanger}/>
            </div>
            <div className={classes.PasswordButton}>
            <button onClick={editPasswordHandler}>save</button>
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

const mapStateToProps=(state)=>{
    return{
        token:state.auth.token
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSetEmail:(token,username)=>dispatch(actions.editUsername(token,username)),
        onSetPassword:(token,prevpassword,nextpassword)=>dispatch(actions.editPassword(token,prevpassword,nextpassword))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)((EditedProfile));