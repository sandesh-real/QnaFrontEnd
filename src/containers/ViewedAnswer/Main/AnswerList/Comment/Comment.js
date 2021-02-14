import React,{useState,useEffect} from 'react';
import classes from './Comment.module.css';
import Profile from '../../../../../components/UI/Profile/Profile';
import MoreOption from '../../../../../components/UI/MoreOption/MoreOption';

import Button from '../../../../../components/UI/Button/Button'
import * as actions from '../../../../../store/actions/index';
import {connect} from 'react-redux';
import Aux from '../../../../../hoc/Auxilary/Auxilary';
import Axios from 'axios';
import LikeDislikeBtn from './LikeDislikeBtn/LikeDislikeBtn';
const Comment=(props)=>{
  
    const [opnerComment,setOpnerComment]=useState(false);
  
    let OptionClassComment=[classes.MoreOptionContainerComment];
    const [comment,setComment]=useState('');
       const [commentCol,setCommentCol]=useState([]);

    const [useEffectHandler,setUseEffectHandler]=useState(true);

   
   

    useEffect(()=>{
        if(useEffectHandler){
           
        Axios.post(`http://localhost:3000/getComment/${props.token}&id=${props.id}`)
        .then((res)=>{
            
           setCommentCol(res.data.commentColl)
           setUseEffectHandler(false);
           
        })
    }
    })

  
  const showMoreOptionComment=()=>{
    setOpnerComment(!opnerComment)
  }
  

  const submitHandlerComment=(event)=>{
    event.preventDefault();

    setUseEffectHandler(true);
       props.onComment(comment,props.id,props.token);
       setComment('');
}
const onChangeHandlerComment=(event)=>{
    
    setComment(event.target.value)
  }




    if(opnerComment)
    {
        OptionClassComment=[classes.MoreOptionContainerComment,classes.OptionShow];
    }
    const comments=(
        commentCol.map((comment)=>{
       
            return(
               
                <div className={classes.Comment} key={comment._id}>
                   
               
             
                <div className={classes.UpperPart}>
                    <Profile    friendRequestshow='true' username={comment.username} otherUserId={comment.commentUserId} avatar={comment.userAvatar}>5 hr ago</Profile>
                    <div className={classes.moreOptions} >
    <button className={classes.OptionAnchor} onClick={showMoreOptionComment}>
    ...
    </button>
    
    <div className={OptionClassComment.join(' ')}><MoreOption/></div>
        </div>
                </div>
                <div className={classes.LowerPart}>
                    <div className={classes.CommentList}>
                    <div className={classes.cmtTextAndLike}>
                    <p className={classes.CommentText}>{comment.title}</p>
               <LikeDislikeBtn commentId={comment._id} isLikeBol={comment.isLikeBol} isDisLikeBol={comment.isDisLikeBol} cmtLikeCnt={comment.LikeCount} cmtDisLikeCnt={comment.DisLikeCount}/>
                  
                    </div>
                        
                        
                    </div>
                 
                </div>
         
            </div>
            )
        })
    )
    
    return(
       <Aux>{comments}
        <div className={classes.CommentInputContainer}>
                        <div className={classes.Cmtprofile}>
                            <img src={props.runningUseravatar} alt="cmtimg"/>
                        </div>
                        <form className={classes.CommentForm} onSubmit={submitHandlerComment}>
                            <div className={classes.Input}>
                                <input type="text" onChange={onChangeHandlerComment} value={comment} placeholder='Doubt'/>
                            </div>
                            <div className={classes.CmtBtn}>
                                <Button show={()=>props.cntHandler(comment)} btnType="Success">Ask</Button>
                            </div>
                            </form>
                        </div>
       </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
    token:state.auth.token,
    commentColl:state.comment.commentColl,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      
        onComment:(data,answerID,token)=>dispatch(actions.comment(data,answerID,token)),
        onSetLike:(token,id)=>dispatch(actions.like(token,id)),
        onSetDisLike:(token,id)=>dispatch(actions.disLike(token,id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment);