import React from 'react';
import classes from './ViewedAnswer.module.css';
import Main from './Main/Main';
import RelatedQuestion from './RelatedQuestion/RelatedQuestion';
// import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
const ViewedAnswer=(props)=>{


    let viewAnswerData=null;
    
    if(props.viewanswerdata!==null)
    {
      viewAnswerData=props.viewanswerdata;
 
   
    }


  
  return(
    <div className={classes.ViewedAnswer}>
        {viewAnswerData?<Main {...props}  viewAnswerData={viewAnswerData}  q_id={props.q_id}  token={props.token}/>:null}
        
        <RelatedQuestion/>
    </div>
)
}
const mapStateToProps=(state)=>{
  return{
    token:state.auth.token
      // viewanswerdata:state.viewAnswer.viewAnswerData
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewedAnswer);