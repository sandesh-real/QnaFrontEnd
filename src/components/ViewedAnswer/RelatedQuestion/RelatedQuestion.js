import React from 'react';
import classes from './RelatedQuestion.module.css';
const RelatedQuestion =(props)=>{
    return(
        <div className={classes.RelatedQuestion}>
            <div className={classes.RelatedQuestionInternal}>
                <h1>Related Question</h1>
                <ul className={classes.questionLists}>
                    <li className={classes.questionList}><a href="b">What is java?</a></li>
                    <li className={classes.questionList}><a href="a">Do you know how to study linear algebra? Any tips will be helpfull.</a></li>
                    <li className={classes.questionList}><a href="c">What is calculus?</a></li>
                    
                </ul> 
            </div> 

        </div>
    )
}
export default RelatedQuestion;