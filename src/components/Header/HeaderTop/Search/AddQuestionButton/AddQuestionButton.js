import React from 'react';
import classes from './AddQuestionButton.module.css';
const AddQuestionButton =(props)=>{
    return(
        <div className={classes.AddButtonContianer}>
        <button className={classes.AddQuestionButton}><i className="fas fa-plus"></i> Add</button>
        </div>
    )
}
export default AddQuestionButton;