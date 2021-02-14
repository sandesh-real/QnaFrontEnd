import React,{useState} from 'react';
import Profile from '../../../UI/Profile/Profile'
import classes from './Answer.module.css';
import Comment from './Comment/Comment';
import MoreOption from '../../../UI/MoreOption/MoreOption';
import cmtProfile from '../../../../Assets/images/msk.jpg';
import Button from '../../../UI/Button/Button';
const AnswerList=(props)=>{
   
    const [opnerAnswer,setOpnerAnswer]=useState(false);
    const [showComment,setShowComment]=useState(false);
  
    let OptionClassAnswer=[classes.MoreOptionContainerAnswer];
    const showCommentHandler=(props)=>{
        setShowComment(!showComment);
    }
  const showMoreOptionAnswer=()=>{
    setOpnerAnswer(!opnerAnswer)
  }

    if(opnerAnswer)
    {
        OptionClassAnswer=[classes.MoreOptionContainerAnswer,classes.OptionShow];
    }
    return(
        <div className={classes.AnswerList}>
        <div className={classes.ProfileAndMoreOption}>
            <div className={classes.profileContainer}>
                <Profile>5 hr ago</Profile>
            </div>
            <div className={classes.moreOptions} >
<button className={classes.OptionAnchor} onClick={showMoreOptionAnswer}>
...
</button>

<div className={OptionClassAnswer.join(' ')}><MoreOption/></div>
    </div>
        </div>
        <div className={classes.AnswerContainer}>
        <p>Answer is Answer the Answer. I answer you answer me answer.</p>
        </div>
        <div className={classes.CommentAndLikes}>
            <button className={classes.CommentBtn} onClick={showCommentHandler}><span>1</span><i className="far fa-comment-dots"></i></button>
            <div className={classes.LikeAndDislike}>
            <button className={classes.LikeBtn}><span>1</span><i className="fas fa-heart"></i></button>
            <button className={classes.DisLikeBtn}><span>1</span><i className="fas fa-heart-broken"></i></button>
            </div>

        </div>
            {showComment?<div className={classes.CommentContainer}>
                <Comment/>
                <Comment/>
                <div className={classes.CommentInputContainer}>
                        <div className={classes.Cmtprofile}>
                            <img src={cmtProfile} alt="cmtimg"/>
                        </div>
                            <div className={classes.Input}>
                                <input type="text" placeholder='Comment'/>
                            </div>
                            <div className={classes.CmtBtn}>
                                <Button btnType="Success">Comment</Button>
                            </div>
                        </div>
            </div>:null}
    </div>
    )
}
export default AnswerList;