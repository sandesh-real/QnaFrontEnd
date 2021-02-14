import React,{useEffect} from 'react';
import Notification from '../Notification/Notification';
import Aux from '../../hoc/Auxilary/Auxilary';
// import Axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'
const NotificationHandler=(props)=>{
    
    // const [friendNotiColl,setFriendNotiColl]=useState([]);
    // const [randomNotiColl,setRandomNotiColl]=useState([]);
    useEffect(()=>{
       
      
        props.getFriendNotiColl(props.token);
        // Axios.post(`http://localhost:3000/createFriendNotification/${props.token}`)
        // .then((res)=>{
            
        //     setFriendNotiColl(res.data.friedNotificationColl);
        // })
     
    
        props.getRandomNotiColl(props.token);
     
    })
   const  showClearHandler=()=>{
       
    }
    return(
        <Aux>
            <Notification  randomReqNoti={props.randomReqNoti} friendReqNoti={props.friendReqNoti} {...props}  clicked={showClearHandler}/>
        </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        friendReqNoti:state.notification.friendReqNoti,
        randomReqNoti:state.notification.randomReqNoti,
        // friendNotiColl:state.notification.friendNotiColl
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getFriendNotiColl:(token)=>dispatch(actions.friendNotiCollection(token)),
        getRandomNotiColl:(token)=>dispatch(actions.randomNotiCollection(token))
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NotificationHandler);