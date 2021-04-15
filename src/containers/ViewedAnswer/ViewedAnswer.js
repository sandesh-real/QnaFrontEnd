import React from 'react';
import classes from './ViewedAnswer.module.css';
import Main from './Main/Main';
import Loader from '../../helperComponent/Loader/Loader'
import RelatedQuestion from './RelatedQuestion/RelatedQuestion';
// import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
const ViewedAnswer=(props)=>{


    let viewAnswerData=null;
    
    if(props.viewanswerdata!==null)
    {
      viewAnswerData=props.viewanswerdata;
 
   
    }

if(props.isLoading)
{
  return(
    <Loader/>
    )
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
    token:state.auth.token,
    isLoading:state.viewAnswer.isLoading
      // viewanswerdata:state.viewAnswer.viewAnswerData
  }
} 
const mapDispatchToProps=(dispatch)=>{
  return{
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewedAnswer);