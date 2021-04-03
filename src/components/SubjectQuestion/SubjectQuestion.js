import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './SubjectQuestion.module.css';

const SubjectQuestion=(props)=>{
   
    return(
        <div className={classes.middleContent}>
        <ul className={classes.SubjectQuestionLists}>
        
            {props.subjectQuestionColl.map((question)=>{
               return <li key={question._id} className={classes.SubjectQuestionList}><NavLink className={classes.SubjectQuestionListNav} to={{pathname:`/viewedanswer/${question._id}`}}>{question.title} <span>{question.answrCount} {question.isAnswer?"Answer":"Not Answered Yet"}</span></NavLink></li>

            })}
        </ul>
        </div> 
    )
}
export default SubjectQuestion;