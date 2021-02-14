import React,{ useState} from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const UserProfileHandler=(props)=>{
    
    const [profilePicFile,setProfilePicFile]=useState();
    const [isGotImage,setIsGotImage]=useState(false);
    const profilePicHandler=(event)=>{
        event.preventDefault();
        const formData=new FormData();
        
        formData.append('file',profilePicFile);
      
      
        props.getImgFile(formData,props.userId);

    }
    const inputChangeHandler=(event)=>{
        setIsGotImage(true);
        const files=event.target.files[0]
       
        setProfilePicFile(files);
    }
    const allsetHandler=()=>{
        props.allset();
        props.history.push('/');
    }
    return(
        <UserProfile isGotImage={isGotImage} isImageChanged={props.isImageChanged} token={props.token} imageBuffer={props.imageBuffer} allsetHandler={allsetHandler} profilePicFile={profilePicFile} inputChangeHandler={inputChangeHandler} profilePicHandler={profilePicHandler}/>
    )
}
const mapStateToProps=(state)=>{
    return{
        userId:state.auth.userId,
        token:state.auth.token,
        imageBuffer:state.auth.imageBuffer,
        isImageChanged:state.auth.isImageChanged
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getImgFile:(formData,userId)=>dispatch(actions.profilePic(formData,userId)),
        allset:()=>dispatch(actions.allset())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfileHandler);