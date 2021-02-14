import React,{useState} from 'react';

import Profile from '../Profile/Profile';


const ProfileHandler=(props)=>{

    const [EmailEditOpner,setEmailEditOpner]=useState(false);
    const [EmailPasswordOpner,setPasswordEditOpner]=useState(false);
    const profileEditCancledHandler=()=>{
      
        props.history.replace('/profile');
     
    }
    const ShowEmailHandler=(props)=>{
        setEmailEditOpner(!EmailEditOpner);
    }
    const ShowPasswordHandler=(props)=>{
        setPasswordEditOpner(!EmailPasswordOpner);
    }

    return(
        <Profile cancled={profileEditCancledHandler} toShowPassword={EmailPasswordOpner} toShowEmail={EmailEditOpner} showPassword={ShowPasswordHandler} showEmail={ShowEmailHandler}/>
    )
}
export default ProfileHandler;