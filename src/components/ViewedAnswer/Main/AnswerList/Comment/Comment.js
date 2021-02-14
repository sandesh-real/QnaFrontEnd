import React,{useState} from 'react';
import classes from './Comment.module.css';
import Profile from '../../../../UI/Profile/Profile';
import MoreOption from '../../../../UI/MoreOption/MoreOption';
import Replies from './Replies/Replies';
import cmtProfile from '../../../../../Assets/images/msk.jpg';
import Button from '../../../../UI/Button/Button'

const Comment=(props)=>{
   
    const [opnerComment,setOpnerComment]=useState(false);
  
    let OptionClassComment=[classes.MoreOptionContainerComment];
    const [showReplies,setShowReplies]=useState(false);
  
    const showRepliesHandler=(props)=>{
        setShowReplies(!showReplies);
    }
  const showMoreOptionComment=()=>{
    setOpnerComment(!opnerComment)
  }

    if(opnerComment)
    {
        OptionClassComment=[classes.MoreOptionContainerComment,classes.OptionShow];
    }
    return(
        <div className={classes.Comment}>
            <div className={classes.UpperPart}>
                <Profile>5 hr ago</Profile>
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
                <p className={classes.CommentText}>Thank you for answer</p>
                  <div className={classes.LikeAndDislike}>
              <button className={classes.LikeBtn}><span>1</span> <i className="fas fa-heart"></i></button>
            <button className={classes.DisLikeBtn}><span>1</span> <i className="fas fa-heart-broken"></i></button>
            </div>
              
                </div>
                    
                    <button className={classes.ReplyBtn} onClick={showRepliesHandler}>replies... <span>1</span></button>
                   {showReplies? <div className={classes.ReplieContainer}>
                        <Replies/>
                        <Replies/>
                        <div className={classes.RepliesInputContainer}>
                        <div className={classes.Replyprofile}>
                            <img src={cmtProfile} alt="cmtimg"/>
                        </div>
                            <div className={classes.Input}>
                                <input type="text" placeholder='Comment'/>
                            </div>
                            <div className={classes.ReplyBtn}>
                                <Button btnType="Success">reply</Button>
                            </div>
                        </div>
                    </div>:null}
                </div>
             
            </div>
     
        </div>
    )
}
export default Comment;