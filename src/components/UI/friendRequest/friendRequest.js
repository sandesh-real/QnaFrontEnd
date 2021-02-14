import React,{useState} from 'react';

import Aux from '../../../hoc/Auxilary/Auxilary';
import {connect} from 'react-redux';
import FriendRequestField from './frienRequestField/friendRequestField'
import * as actions from '../../../store/actions/index'
const FriendRequest=(props)=>{

    const [userId]=useState(props.userId);
    
    return(
        <Aux>
      {userId=== props.otherUserId?null:<FriendRequestField   btnType={props.btnType} otherUserId={props.otherUserId}/>}
        </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
     
        token:state.auth.token,
        userId:state.auth.userId
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       
        onsetFriendRequest:(token,id)=>dispatch(actions.addFriend(token,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FriendRequest);