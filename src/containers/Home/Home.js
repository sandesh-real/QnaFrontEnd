import React,{useEffect} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import MiddleContent from '../../components/main/MiddleContent/MiddleContent';
import Subject from '../../components/main/Subject/Subject';
import PopularQuestion from '../../components/main/PopularQuestion/PopularQuestion';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
const Home =(props)=>{
   
     useEffect(()=>{
       
        props.onRest();
     
        if(props.canReload)
        {
            
             props.onHomeSet(props.token);
             props.onResetReload();
        }
        
        if(localStorage.getItem('canReloadAnswer')!=='false')
        {
           
            props.onHomeSet(props.token);
            const canReloadAnswer=false
            localStorage.setItem('canReloadAnswer',canReloadAnswer)
            
        }
    
     },[props])
   
     const DeleteHandler=(id)=>{
        props.onDeleteQuestion(props.token,id);
        props.onHomeSet(props.token);
     }

    return(
        <Aux>
             <Subject subjects={props.subjects}/>
             <MiddleContent  DeleteHandler={DeleteHandler} userId={props.userId}  username={props.username} isAnswer={props.isAnswer} questionArr={props.questionArr} token={props.token}  bodyClickOption={props.openOption}/>
             <PopularQuestion/>
        </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        subjects:state.auth.subjects,
        token:state.auth.token,
        questionArr:state.auth.questionArr,
        isAnswer:state.auth.isAnswer,
        username:state.auth.username,
        canReload:state.Question.canReload,
        canReloadAnswer:state.viewAnswer.canReloadAnswer,
        userId:state.auth.userId,
        
    }
} 
const mapDispatchToProps=(dispatch)=>{
    return{
        onRest:()=>dispatch(actions.resetViewAnswer()),
        onHomeSet:(token)=>dispatch(actions.homereset(token)),
        onResetReload:()=>dispatch(actions.canRelodReset()),
        onResetReloadAnswer:()=>dispatch(actions.canRelodResetAnswer()),
        onDeleteQuestion:(token,id)=>dispatch(actions.setDeleteQuestionHandler(token,id))
    
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

