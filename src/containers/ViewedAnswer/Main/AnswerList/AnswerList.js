import React,{useState} from 'react';
import Profile from '../../../../components/UI/Profile/Profile'
import classes from './Answer.module.css';
import Comment from './Comment/Comment';
import MoreOption from '../../../../components/UI/MoreOption/MoreOption';

import {NavLink, Route} from 'react-router-dom'
import * as actions from '../../../../store/actions/index';
import {connect} from 'react-redux';
const AnswerList=(props)=>{
 
    const [isLikeBol,setisLikeBol]=useState(props.isLikeBol);
    const [isDisLikeBol,setisDisLikeBol]=useState(props.isDisLikeBol);
    const [opnerAnswer,setOpnerAnswer]=useState(false);
    const [showComment,setShowComment]=useState(false);
    const [doubtCnt,setDoubtCnt]=useState(props.cmtCount);
    const [likeCount,setLikeCount]=useState(props.likeCount);
    const [DislikeCount,setDisLikeCount]=useState(props.dislikeCount);

    let OptionClassAnswer=[classes.MoreOptionContainerAnswer];
    let btnColorLike=[classes.LikeBtn];
    let btnColorDisLike=[classes.DisLikeBtn];
 
    if(isLikeBol)
    {
        btnColorLike=[classes.LikeBtn,classes.btnactive];
    }
    if(isDisLikeBol){
        btnColorDisLike=[classes.DisLikeBtn,classes.btnactive]
    }
    const showCommentHandler=()=>{
      
        setShowComment(!showComment);
       
        
    }
  
  const showMoreOptionAnswer=()=>{
    setOpnerAnswer(!opnerAnswer)
  }
const cntHandler=(comment)=>{
 
  if(comment)
  {
      setDoubtCnt(prevState=>{
          return prevState+1
      })
  }
}
const LikeclickHandler=()=>{
    if(!isLikeBol){
        props.onSetLike(props.token,props.id);
        setisLikeBol(true);
        setisDisLikeBol(false);
    setLikeCount((prevState)=>{
      
     
        return(
            prevState+1

        )
    })

}
    setDisLikeCount((prevState)=>{
        if(isDisLikeBol)
        {
        if(prevState>0){
        return(
            prevState-1
        )
    }
        setisDisLikeBol(false);
    }
    else{
        return prevState
    }
    })
}
const unLikeclickHandler=()=>{
   
    setLikeCount((prevState)=>{
        if(isLikeBol){
            setisLikeBol(false);
           
        if(prevState>0){
        return(
            prevState-1
        )
        }
      
        
    }
        else{
            return prevState
        }
    })

if(!isDisLikeBol){
        props.onSetDisLike(props.token,props.id)
        setisDisLikeBol(true);
        
    setDisLikeCount((prevState)=>{
        
        return(
            prevState+1
        )
    })
}

}

const DeleteHandler=()=>{
    props.onSetDelete(props.token,props.id);
    window.location.reload();
  }

    if(opnerAnswer)
    {
        OptionClassAnswer=[classes.MoreOptionContainerAnswer,classes.OptionShow];
    }
    return(
        <div className={classes.AnswerList}>
        <div className={classes.ProfileAndMoreOption}>
            <div className={classes.profileContainer}>
            
                <Profile friendRequestshow='true' otherUserId={props.answerUserId} username={props.username} avatar={props.avatar}>5 hr ago</Profile>
            </div>
            <div className={classes.moreOptions} >
<button className={classes.OptionAnchor} onClick={showMoreOptionAnswer}>
...
</button>

<div className={OptionClassAnswer.join(' ')}><MoreOption DeleteHandler={DeleteHandler}  isThisMyColl={props.isThisMyAnswerColl}/></div>
    </div>
        </div>
        <div className={classes.AnswerContainer}>
        <p className={classes.answerText}>{props.children}</p>
        </div>
        <div className={classes.CommentAndLikes}>
            <NavLink to={{pathname:`/viewedanswer/${props.q_id}/comment/${props.id}`}} className={classes.CommentBtn} onClick={showCommentHandler}><span className={classes.commentCnt}>{doubtCnt}</span>Doubt</NavLink>
            <div className={classes.LikeAndDislike}>
          
            <button className={btnColorLike.join(' ')} onClick={LikeclickHandler}><span>{likeCount}</span><i className="fas fa-heart"></i></button>
            <button className={btnColorDisLike.join(' ')} onClick={unLikeclickHandler}><span>{DislikeCount}</span><i className="fas fa-heart-broken"></i></button>
            </div>

        </div>
       
            {showComment?<div className={classes.CommentContainer}>
          
                <Route path={props.match.url+"/comment/:id"} render={()=>{ return <Comment  {...props} ans_id={props.id} cmtCount={props.cmtCount} comment={props.comment} runningUseravatar={props.runningUseravatar} cntHandler={cntHandler}/>}}/>
                   
           
                        
            </div>:null}
    </div>
    )
}

const mapStateToProp=(state)=>{
    return{
        commentColl:state.comment.commentColl,
        isBtnClick:state.comment.isBtnClick
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       
        onSetLike:(token,id)=>dispatch(actions.like(token,id)),
        onSetDisLike:(token,id)=>dispatch(actions.disLike(token,id)),
        onSetDelete:(token,id)=>dispatch(actions.setDeleteAnswerHandler(token,id))
       
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(AnswerList);