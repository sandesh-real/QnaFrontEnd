import React,{useEffect} from 'react';
import ViewedAnswer from '../ViewedAnswer/ViewedAnswer';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
const ViewedAnswerHandler=(props)=>{
  
    useEffect(()=>{
       if(props.viewanswerdata===null){
        props.viewAnswerInit(props.match.params.id,props.token);
      
        
        }
    },[props]);
  
    return(
        <ViewedAnswer q_id={props.match.params.id} {...props} viewanswerdata={props.viewanswerdata} token={props.token}/>
    )
}
const mapStateToProps=(state)=>{
    return{
        openOption:state.openOption,
        token:state.auth.token,
        viewanswerdata:state.viewAnswer.viewAnswerData
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        viewAnswerInit:(id,token)=>dispatch(actions.viewanswerInitialStateSetUP(id,token)),
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewedAnswerHandler);
