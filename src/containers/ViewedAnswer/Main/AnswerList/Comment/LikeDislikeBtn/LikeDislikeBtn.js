import React,{useState} from 'react';
import classes from './LikeDislikeBtn.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../../../../store/actions/index'
const LikeDislikeBtn=(props)=>{
    
    const [likeCnt,setLikeCnt]=useState(props.cmtLikeCnt);
    const [DislikeCnt,setDissetLikeCnt]=useState(props.cmtDisLikeCnt)
    const [isLikeBol,setisLikeBol]=useState(props.isLikeBol);
    const [isDisLikeBol,setisDisLikeBol]=useState(props.isDisLikeBol);
    let btnColorLike=[classes.LikeBtn];
    let btnColorDisLike=[classes.DisLikeBtn];
 
    if(isLikeBol)
    {
        btnColorLike=[classes.LikeBtn,classes.btnactive];
    }
    if(isDisLikeBol){
        btnColorDisLike=[classes.DisLikeBtn,classes.btnactive]
    }
    const likeClickHandler=(id)=>{
     
        if(!isLikeBol){
            
            props.onSetLike(props.token,id);
            setisLikeBol(true);
            setisDisLikeBol(false);
            setLikeCnt((prevState)=>{
          
         
            return(
                prevState+1
    
            )
        })
    
    }
    setDissetLikeCnt((prevState)=>{
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
    const dislikeClickHandler=(id)=>{
     
        setLikeCnt((prevState)=>{
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
            props.onSetDisLike(props.token,id)
            setisDisLikeBol(true);
            
            setDissetLikeCnt((prevState)=>{
            
            return(
                prevState+1
            )
        })
    }
    
    }
    

        

    
    return(
        <div className={classes.LikeAndDislike}>
        <button onClick={()=>likeClickHandler(props.commentId)} className={btnColorLike.join(' ')}><span>{likeCnt}</span> <i className="fas fa-heart"></i></button>
      <button onClick={()=>dislikeClickHandler(props.commentId)} className={btnColorDisLike.join(' ')}><span>{DislikeCnt}</span> <i className="fas fa-heart-broken"></i></button>
      </div>
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
      
    
        onSetLike:(token,id)=>dispatch(actions.like(token,id)),
        onSetDisLike:(token,id)=>dispatch(actions.disLike(token,id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LikeDislikeBtn);
