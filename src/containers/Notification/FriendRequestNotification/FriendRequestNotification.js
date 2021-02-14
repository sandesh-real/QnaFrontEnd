import React,{useEffect,useState} from 'react';
import classes from './FriendRequestNotification.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Aux from '../../../hoc/Auxilary/Auxilary';
import NotificationBox from './Notificationbox/Nofiticationbox';
// import Axios from 'axios';
const FriendRequestNotification=(props)=>{
    const [friendNotiColls,setFriendNotiColl]=useState(props.friendNotiColl);
    const [useEffecthandler,setUseeffectHandler]=useState(true);

    useEffect(()=>{
  
        if(useEffecthandler===true && friendNotiColls===null)
        {
           
            props.getFriendNotiColl(props.token);
            setUseeffectHandler(false);
        }

        setFriendNotiColl(props.friendNotiColl)
            props.onMakeFalse(props.token);
               
    },[props,friendNotiColls,setFriendNotiColl,useEffecthandler,setUseeffectHandler])
   
    return(
        <Aux>
        {friendNotiColls!==null? 
        <Aux>
        {friendNotiColls[0]!==null?
        <div className={classes.NotificationList}>
        {friendNotiColls.map((friendNoti)=>{
           
            return  <NotificationBox key={friendNoti.id} otherUserId={friendNoti.otherUserId} avatar={friendNoti.avatar} username={friendNoti.username} message={friendNoti.message}/>
        })}
           
       
    </div>:null}
    </Aux>:null}</Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        friendNotiColl:state.notification.friendNotiColl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onMakeFalse:(token)=>dispatch(actions.friendNotiMakeFalse(token)),
        getFriendNotiColl:(token)=>dispatch(actions.friendNotiCollection(token)),
   
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FriendRequestNotification);
