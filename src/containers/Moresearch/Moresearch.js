import React,{useEffect} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Moresearch.module.css';
import {NavLink,useHistory} from 'react-router-dom';

const Moresearch=(props)=>{
    const history=useHistory();
    useEffect(()=>{
        if(history.action==='POP')
        {
            props.history.push('/');
        }
    })

    useEffect(()=>{
    
        
       if(props.moreRelatedQuestion===null)
       {
         
        props.onMoreQuestionAgain()
       }
    },[props])
   
    return(
        <Aux>
        {props.moreRelatedQuestion!==null?
        <Aux>
        <div className={classes.Moresearch}>
        <h2 className={classes.MoreSearchTitle}>Your Search Result</h2>
            <div className={classes.ClickedQuestionContainer}>
            {props.moreRelatedQuestion.length>0?<NavLink to={{pathname:`/viewedanswer/${props.moreRelatedQuestion[0]._id}`}} className={classes.ClickedQuestionContainerQuestion}>{props.moreRelatedQuestion[0].title}</NavLink>:null}
            </div>
            <div className={classes.OtherRelatedQuestion}>
                <h2 className={classes.OtherRelateQuestionTitle}>Other Related Question</h2>
                <div className={classes.OtherRelteQuestionCollection}>
                {props.moreRelatedQuestion.length>0?<ul className={classes.OtherRelatedQuestionLists}>
                        {props.moreRelatedQuestion[1].map((question)=>{
                           return <li  key={question.id} className={classes.OtherRelatedQuestionList}><NavLink to={{pathname:`/viewedanswer/${question.id}`}} className={classes.OtherRelatedQuestionListNav}>{question.title}</NavLink></li>
                        })}
                    </ul>:null}
                </div>
            </div>
        </div>
        
        
        </Aux>:null}</Aux>
     
    )

}
const mapStateToProps=(state)=>{
    return{
        moreRelatedQuestion:state.Question.moreRelatedQuestion,
        token:state.auth.token,
        searchColl:state.Question.searchColl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onMoreQuestionAgain:()=>dispatch(actions.setMoreQuestionAgain())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Moresearch);