import React from 'react';
import classes from './MiddleContent.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import AskQuestion from '../../../containers/AskQuestion/AskQuestion';
import Question from '../../UI/Quesiton/Question';

const MiddleContent=(props)=>{

    return(
   
        <Aux>
        <div className={classes.MiddleContent}>
            <AskQuestion username={props.username}/>
            <div className={classes.MainQuestionContainer}>
 
               {props.questionArr.map((question)=>{
                
                   return <Question  DeleteHandler={()=>props.DeleteHandler(question._id)} otherUserId={question.user_id} isThisMyQuestionColl={question.isThisMyQuestionColl}  username={question.username} id={question._id} viewAnswerHandler={props.viewAnswerHandler} avatar={question.userAvatar} key={question._id} isAnswer={question.isAnswer} token={props.token} >{question.title[0]}</Question>
               })} 
       
            </div>
        </div>
        
</Aux>
    )
}
export default MiddleContent;