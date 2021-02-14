import React from 'react';
import classes from './ViewedAnswer.module.css';
import Main from './Main/Main';
import RelatedQuestion from './RelatedQuestion/RelatedQuestion';
const ViewedAnswer=(props)=>{
    
  return(
    <div className={classes.ViewedAnswer}>
        <Main/>
        <RelatedQuestion/>
    </div>
)
}
export default ViewedAnswer;