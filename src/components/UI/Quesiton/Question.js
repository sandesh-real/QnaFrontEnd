import React,{useState} from 'react';
import classes from './Question.module.css';
import Button from '../Button/Button';

import Backdrop from '../Backdrop/Backdrop';
import Tag from '../Tag/Tag';
import Profile from '../Profile/Profile';
import MoreOption from '../MoreOption/MoreOption';
import ReactHtmlParser from 'react-html-parser';

const Question =(props)=>{

    const [opner,setOpner]=useState(false);
    

    let OptionClass=[classes.MoreOptionContainer];
    
    const showMoreOption=(event)=>{
        setOpner(!opner);
          
    }
    const BackdropHandler=()=>{
        setOpner(false);
    }
  
    if(opner)
    {
        OptionClass=[classes.MoreOptionContainer,classes.OptionShow];
    }
 
    return(
        <div className={classes.QuestionBox}>
          
                <div className={classes.Question}>
                    <div className={classes.TwoPart}>
                    <p className={classes.RecommendateText}>Recommendate For You</p>
                    
                    <div className={classes.moreOptions} >
        <button className={classes.OptionAnchor} onClick={showMoreOption}>
        ...
     </button>
            <Backdrop type='transparent' show={opner} clicked={BackdropHandler}></Backdrop>
              <div className={OptionClass.join(' ')}><MoreOption DeleteHandler={props.DeleteHandler} isThisMyColl={props.isThisMyQuestionColl}/></div>
                    </div>

                    </div>
                   
                    <Profile otherUserId={props.otherUserId}    friendRequestshow='true' username={props.username} avatar={props.avatar}>5 hr ago</Profile>
                  
               
            <h1 className={classes.QuestionText}>{ReactHtmlParser(props.children)}</h1>
                    
                    {/* {{!-- <div class="question-image">
                        <img src="../image/html/{3AA6A9A0-1738-4A0E-A8D3-E232218068D1}.png.jpg" alt="fsdfds" >

                    </div> --}} */}
               
                    
                    <div className={classes.LowerPart}>
                       <div className={classes.TagContainer}>
                         <Tag/>
                       </div>
                       
                       <div className={classes.QuestionBtn}>
                       {props.isAnswer?<Button id={props.id}  viewAnswerHandler={props.viewAnswerHandler} btnType="OnlyClick" to="/viewedanswer">View Answer</Button>:
                            <Button btnType="OnlyClick"  id={props.id} to="/viewedanswer">Not Answer Yet</Button>}
                    </div>
                    </div>
                  
                </div>
                
             
                   
              
          
                </div>
    )
}
export default Question;