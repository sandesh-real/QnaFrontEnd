import React,{useState} from 'react';
import classes from './Main.module.css';
import MoreOption from '../../../components/UI/MoreOption/MoreOption';
import Tag from '../../../components/UI/Tag/Tag';
import Button from '../../../components/UI/Button/Button';
import Profile from '../../../components/UI/Profile/Profile';
import AnswerList from './AnswerList/AnswerList';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import AnswerPopUp from './AnswerPopUp/AnswerPopUp';
import {connect} from 'react-redux';
const Main=(props)=>{
   
    const [opnerQuestion,setOpnerQuestion]=useState(false);
    const [showAnswerInput,setShowAnswerInput]=useState(false);
    let OptionClassQuesiton=[classes.MoreOptionContainerQuestion];
    
    const showMoreOptionQuestion=(event)=>{
        setOpnerQuestion(!opnerQuestion);
            
    }
    const showAnswerInputHandler=()=>{
        setShowAnswerInput(true);
    }
    const hidePopupHandler=()=>{
        setShowAnswerInput(false);
    }

    if(opnerQuestion)
    {
        OptionClassQuesiton=[classes.MoreOptionContainerQuestion,classes.OptionShow];
    }
    console.log(props.viewAnswerData)
    return(
    
        <div className={classes.Main}>
        <AnswerPopUp qsn={props.viewAnswerData[0].question} token={props.token} show={showAnswerInput} clicked={hidePopupHandler}/>
            <Backdrop show={showAnswerInput} type="white" clicked={hidePopupHandler}/>
            <div className={classes.TopPart}>
                <div className={classes.AnswerQuestionContainer}>
                <div className={classes.Upper}>
                <div className={classes.ProfileContaier}>
                    <Profile annonymity={props.viewAnswerData[0].annonymity}  friendRequestshow='true' username={props.viewAnswerData[0].username} otherUserId={props.viewAnswerData[0].user_id} avatar={props.viewAnswerData[0].questionAvatar} >5 hrs ago</Profile>
                </div>
                <div className={classes.moreOptions} >
        <button className={classes.OptionAnchor} onClick={showMoreOptionQuestion}>
        ...
     </button>
              
              <div className={OptionClassQuesiton.join(' ')}><MoreOption/></div>
                    </div>
                </div>
                    <h1 className={classes.AnswerQuestionHeading}>{props.viewAnswerData[0].question}</h1>
                    <div className={classes.TagAndButton}>
                    <div className={classes.TagContainer}>
                        <Tag/>
                    </div>
                    <div className={classes.AnswerQuestionButton}>
                        <Button btnType="OnlyClick" show={showAnswerInputHandler}>Add Answer</Button>
                    </div>
                    </div>
                    <div className={classes.AnswerCount}>
                    {props.viewAnswerData[1]? <p><span>{props.viewAnswerData[1].length}</span> Answer</p>: <p><span>0</span> Answer</p>}
                        
                    </div>
                </div>
            </div>
            {props.viewAnswerData[0].isEmpty?null:
            <div className={classes.BottomPart}>
                
                  {props.viewAnswerData[1].map((viewAnswer)=>{
                   
                      return <AnswerList {...props} isThisMyAnswerColl={viewAnswer.isThisMyAnswerColl} runningUseravatar={props.viewAnswerData[0].questionAvatar}  q_id={props.q_id} answerUserId={viewAnswer.answerUserId} id={viewAnswer._id} token={props.token} dislikeCount={viewAnswer.dislikeCnt} likeCount={viewAnswer.likesCnt} isDisLikeBol={viewAnswer.isDisLikeBol} isLikeBol={viewAnswer.isLikeBol} cmtCount={viewAnswer.commentCnt} key={viewAnswer._id} username={viewAnswer.username} avatar={viewAnswer.AnswerAvatar}>{viewAnswer.answer}</AnswerList>
                  })}
                    
            </div>}
            
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token
    }
}
export default connect(mapStateToProps)(Main);