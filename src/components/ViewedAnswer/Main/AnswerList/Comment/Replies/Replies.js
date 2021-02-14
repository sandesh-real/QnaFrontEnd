import React,{useState} from 'react';
import classes from './Replies.module.css';
import Profile from '../../../../../UI/Profile/Profile';
import MoreOption from '../../../../../UI/MoreOption/MoreOption';

const Replies=(props)=>{
   
    const [opnerReplies,setOpnerReplies]=useState(false);
  
    let OptionClassReplies=[classes.MoreOptionContainerReplies];

  const showMoreOptionReplies=()=>{
    setOpnerReplies(!opnerReplies)
  }

    if(opnerReplies)
    {
        OptionClassReplies=[classes.MoreOptionContainerReplies,classes.OptionShow];
    }
    return(
        <div className={classes.Replies}>
                   <div className={classes.UpperPart}>
                <Profile>5 hr ago</Profile>
                <div className={classes.moreOptions} >
<button className={classes.OptionAnchor} onClick={showMoreOptionReplies}>
...
</button>

<div className={OptionClassReplies.join(' ')}><MoreOption/></div>
    </div>
            </div>
            <div className={classes.LowerPart}>
                <div className={classes.ReplieList}>
                    <p className={classes.ReplieText}>Thank you for answer</p>
                </div>
            </div>
        
        </div>
    )

}
export default Replies;