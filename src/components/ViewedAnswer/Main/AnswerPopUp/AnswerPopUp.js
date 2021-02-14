import React,{useState} from 'react';
import classes from './AnswerPopUp.module.css';
import Aux from '../../../../hoc/Auxilary/Auxilary';
import Profile from '../../../UI/Profile/Profile';
import Input from './Input/Input';
import Button from '../../../UI/Button/Button';
const AnswerPopUp=(props)=>{
    const [answerQuestion,setAnswerQuestion]=useState({
        answer:{
            elementType:'textarea',
            selectType:'',
            elementConfig:{
                placeholder:"Answer question in simple and  clear form"

            },
            value:''
        },
        Annonymity:{
            elementType:'select',
            selectType:'subject',
            elementConfig:{
                options:[{value:'java',displayValue:'Java'},
                        { value:'ADBMS',displayValue:'ADBMS'}]
            },
            value:''
        },
     
    });
    const inputChangeHandler=(event,inputIdentifier)=>{
        const updateOrderForm={...answerQuestion};
        let updateFormElement='';
        updateFormElement={...updateFormElement[inputIdentifier]};
        updateFormElement.value=event.target.value;
        updateOrderForm[inputIdentifier]=updateFormElement;
        setAnswerQuestion(updateOrderForm);
    }
    const formElementArray=[];
    for(let key in answerQuestion)
    {
        formElementArray.push({
            id:key,
            config:answerQuestion[key],
        })
    }

    let form=(<form className={classes.form}>
    <div className={classes.ProfileContainer}>
        <Profile />
    </div>
      

    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event)=>inputChangeHandler(event,formElement.id)} value={formElement.config.value} key={formElement.id} selectType={formElement.config.selectType} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig}/>
    ))}
        <div className={classes.btnContainerPosition}>
        <Button btnType="Success">Answer Question</Button>
        </div>
    </form>)
    return(
        <Aux>
      {props.show?<Aux><div className={classes.AskQuestionInInput}>
                <h1>Question</h1>
                <p>Question is Question of Question. This question is question that question.</p>
            </div>
        <div className={classes.AnswerPopUp}>
            
        <button className={classes.cross} onClick={props.clicked}>X</button>

            {form}
        </div></Aux>:null}
        </Aux>
    )
}
export default AnswerPopUp;