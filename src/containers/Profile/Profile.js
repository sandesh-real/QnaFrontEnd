
import React,{useState} from 'react';
import classes from './Profile.module.css'

import {NavLink,Route,Switch,withRouter} from 'react-router-dom';
import EditedProfile from './RightInternalContainer/EditedProfile/EditedProfile';
import YourQuestion from './RightInternalContainer/YourQuestion/YourQuestion';
import ProfileStartContent from './ProfileStartContent/ProfileStartContent';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

const Profile=(props)=>{
    
    let LeftCssModified=[classes.Left];
    let RightCssModified=[classes.Right];
    let [showEditedProfile,setShowEditedProfile]=useState(false);
    const [profilePicFile,setProfilePicFile]=useState();


    
    const setShowEditedProfileHandler=()=>{
        setShowEditedProfile(true);
      
    }
  
    const profilePicHandler=(event)=>{
        event.preventDefault();
        const formData=new FormData();
        
        formData.append('file',profilePicFile);
      
      
        props.getUploadImgFile(formData,props.token);
      

    }
    const inputChangeHandler=(event)=>{
      
        const files=event.target.files[0]
       
        setProfilePicFile(files);
    }





    if(showEditedProfile===true && props.location.pathname==='/profile')
    {
        window.location.reload();
    }
    if(showEditedProfile)
    {
        LeftCssModified=[classes.Left,classes.LeftCloser];
        RightCssModified=[classes.Right,classes.RightOpner]
        
    }
    if(props.location.pathname==='/profile')
    {
       
        LeftCssModified=[classes.Left];
        RightCssModified=[classes.Right]
    }
    
    return(
       
        <div className={classes.Profile}>
         <div className={LeftCssModified.join(' ')}>
            <div className={classes.ProfilePictureInfo}>
                <div className={classes.ProfilePicture}>
                    <img src={`http://localhost:3000/user/profile/${props.token}`}   alt="profilePicture"/>
                </div>
                <div className={classes.ProfileName}>
                    <h2>Sandesh sharma</h2>
                </div>
                <div className={classes.ProfilePictureChangeBtn}>
              
                    <form className={classes.userForm}   onSubmit={profilePicHandler}>
                    
                    <input type="file" name='profile' className={classes.inputFile}  onChange={inputChangeHandler}/>
                    
                         <div className={classes.profileBtn}>
                        <button className={classes.UploadPictureBtn} >Change Profile Picture</button>
                        </div>
                    </form>
                
                </div>
            </div>
            <div className={classes.ProfileSetting}>
                <div className={classes.ProfileSettingButton}>
                    <button className={classes.ProfileBtn}  onClick={setShowEditedProfileHandler} ><NavLink className={classes.ProfileBtnNav} to='/profile/right'>Edit Profile <i className="fas fa-angle-right"></i></NavLink></button>
                </div>
                <div className={classes.OtherList}>
                <ul className={classes.SettingLists}>
                        <li className={classes.SettingList}><NavLink  onClick={setShowEditedProfileHandler}  className={classes.YourQuestionBtnNav} to="/profile/yourquestion">Your Question <i className="fas fa-angle-right"></i></NavLink></li>
                    </ul>    
                </div>
               
               
            </div>
         </div>
         <div className={RightCssModified.join(' ')}>
        <div className={classes.RightIntrenalContainer}>
        {showEditedProfile?<Switch>
      

      <Route path={props.match.url+'/right'}   render={()=>{return <EditedProfile {...props} toShowPassword={props.toShowPassword} toShowEmail={props.toShowEmail} clickedPassword={props.showPassword} clickedEmail={props.showEmail}  profileEditCancled={props.cancled}/>}}/>
      <Route path={props.match.url+'/yourquestion'}   render={(props)=>{ return <YourQuestion/>}}/>
      
      </Switch>:<ProfileStartContent/>}
        
        </div>
          
        </div>
            {/* <Route path={props.match.url+'/right'} render={(props)=>{console.log('haha');return <Right {...props} show={showEditedProfile}/>}}/> */}
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
        getUploadImgFile:(filedata,token)=>dispatch(actions.uploadProfilePic(filedata,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Profile));