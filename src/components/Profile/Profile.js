
import React,{useState} from 'react';
import classes from './Profile.module.css'
import ProfileImage from '../../Assets/images/msk.jpg';
import {NavLink,Route,Switch,withRouter} from 'react-router-dom';
import EditedProfile from './RightInternalContainer/EditedProfile/EditedProfile';
import YourQuestion from './RightInternalContainer/YourQuestion/YourQuestion';
import ProfileStartContent from './ProfileStartContent/ProfileStartContent';

const Profile=(props)=>{
    
    let LeftCssModified=[classes.Left];
    let RightCssModified=[classes.Right];
    let [showEditedProfile,setShowEditedProfile]=useState(false);
    
    const setShowEditedProfileHandler=()=>{
        setShowEditedProfile(true);
      
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
    console.log(showEditedProfile) 
    return(
       
        <div className={classes.Profile}>
         <div className={LeftCssModified.join(' ')}>
            <div className={classes.ProfilePictureInfo}>
                <div className={classes.ProfilePicture}>
                    <img src={ProfileImage} alt="profilePicture"/>
                </div>
                <div className={classes.ProfileName}>
                    <h2>Sandesh sharma</h2>
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

export default withRouter(Profile);