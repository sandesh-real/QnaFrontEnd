import React,{useState} from 'react';
import classes from './AnswerPopUp.module.css';
import Aux from '../../../../hoc/Auxilary/Auxilary';
import Profile from '../../../../components/UI/Profile/Profile';
import Input from './Input/Input';
import Button from '../../../../components/UI/Button/Button';
import * as actions from '../../../../store/actions/index';
import {connect} from 'react-redux';
const AnswerPopUp=(props)=>{
    const [answerQuestion,setAnswerQuestion]=useState({
        answer:{
            elementType:'textarea',
            
            elementConfig:{
                placeholder:"Answer question in simple and  clear form"

            },
            value:''
        },
      
     
    });
    const inputChangeHandler=(event,inputIdentifier)=>{
        const updateOrderForm={...answerQuestion};
        let updateFormElement='';
        updateFormElement={...updateOrderForm[inputIdentifier]};
        updateFormElement.value=event.target.value;
        updateOrderForm[inputIdentifier]=updateFormElement;
        setAnswerQuestion(updateOrderForm);
    }
    const answerSubmitHandler=(event)=>{
        event.preventDefault();
       
        props.onSetAnswer(props.token,answerQuestion.answer.value,props.q_id);
        const canReloadAnswer=true
        localStorage.setItem('canReloadAnswer',canReloadAnswer)
        window.location.reload();

      }
    const formElementArray=[];
    for(let key in answerQuestion)
    {
        formElementArray.push({
            id:key,
            config:answerQuestion[key],
        })
    }

  
    let form=(<form className={classes.form} onSubmit={answerSubmitHandler}>
    <div className={classes.ProfileContainer}>
        <Profile username={props.username} token={props.token}/>
    </div>
      

    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event)=>inputChangeHandler(event,formElement.id)} value={formElement.config.value} key={formElement.id} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig}/>
    ))}
        <div className={classes.btnContainerPosition}>
        <Button btnType="Success">Answer Question</Button>
        </div>
    </form>)
    return(
        <Aux>
      {props.show?<Aux><div className={classes.AskQuestionInInput}>
                <h1>Question</h1>
                <p>{props.qsn}</p>
            </div>
        <div className={classes.AnswerPopUp}>
            
        <button className={classes.cross} onClick={props.clicked}>X</button>

            {form}
        </div></Aux>:null}
        </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        userId:state.auth.userId,
        q_id:state.viewAnswer.q_id,
        username:state.auth.username
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSetAnswer:(token,answerData,q_id)=>dispatch(actions.viewAnswerAdd(token,answerData,q_id)),
   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AnswerPopUp);