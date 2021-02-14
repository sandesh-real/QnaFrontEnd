import React,{useState,useEffect} from 'react';
import classes from './friendRequestField.module.css';
import {connect} from 'react-redux';
import Axios from 'axios';
import * as actions from '../../../../store/actions/index'
const FriendRequestField=(props)=>{
    const [isShown, setIsShown] = useState(false);
    const [closebackdrop,setCloseBackdrop]=useState(false);
    let friendReqModClass=[classes.friendRequestBtn];
    if(props.btnType==='larger')
    {
        friendReqModClass=[classes.friendRequestBtnLarge];
    }
    const [effectHandler,setEffectHandler]=useState(true);
    const [isAlreadyFriend,setIsAlreadyFriend]=useState();
    useEffect(()=>{
        if(effectHandler){

        Axios.post(`http://localhost:3000/friendRequest/checkstatus/${props.token}&id=${props.otherUserId}`)
            .then((res)=>{
                setIsAlreadyFriend(res.data.isAlreadyFriend)
            })
     
        setEffectHandler(false);
        }
        setIsAlreadyFriend(props.isAlreadyFriend);
    },[props,effectHandler])
  

    if(isAlreadyFriend){
        friendReqModClass=[classes.friendRequestBtn,classes.friendRequestActive]
    }
  
   
  
    const change=(id)=>{
        setCloseBackdrop(true);
        props.onsetFriendRequest(props.token,id);

     
    }

    const closeNoti=()=>{
     
        window.location.reload();
    }

    return(
        <div className={classes.friendRequest}>
        {closebackdrop?<div className={classes.friendRequestBackdrop}>
            <div className={classes.friendRequestSuccess}>
                <p className={classes.friendRequestMessage}>{props.friendRequestMessage}</p>
                <div className={classes.friendRequestOkBtnContainer}>
                <button className={classes.friendRequestOkBtn}  onClick={closeNoti}>Ok</button>
                </div>
                
            </div>
        </div>:null}
         {props.btnType==='larger'?<button className={friendReqModClass.join(' ')} onClick={()=>change(props.otherUserId)} onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} ><i className="fas fa-user-plus" id="friendRequestIcon" ></i></button>:
        <button className={friendReqModClass.join(' ')} onClick={()=>change(props.otherUserId)} onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} ><i className="fas fa-user-plus" id="friendRequestIcon" ></i></button>}
        {isShown?<div className={classes.addFriendPopUp}>
        {isAlreadyFriend?<p>Unfollow</p>:<p>Follow</p>}
    </div>:null}
    </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        
        token:state.auth.token,
        friendRequestMessage:state.friendRequest.friendRequestMessage
      
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        // onStatusCheck:(token,id)=>dispatch(actions.statusCheck(token,id)),
        onsetFriendRequest:(token,id)=>dispatch(actions.addFriend(token,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FriendRequestField);