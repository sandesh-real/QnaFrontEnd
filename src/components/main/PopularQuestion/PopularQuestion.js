import React from 'react';
import classes from './PopularQuestion.module.css';
const PopularQuestion =(props)=>{
    return(
        <div className={classes.PopularQuestion}>
            <div className={classes.PopularQuestionInternal}>
                <h1>Popular Question</h1>
                <ul className={classes.questionLists}>
                    <li className={classes.questionList}><a href="b">What is java?</a></li>
                    <li className={classes.questionList}><a href="a">Do you know how to study linear algebra? Any tips will be helpfull.</a></li>
                    <li className={classes.questionList}><a href="c">What is calculus?</a></li>
                    
                </ul> 
            </div> 

        </div>
    )
}
export default PopularQuestion;